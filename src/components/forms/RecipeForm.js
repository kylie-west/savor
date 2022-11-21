import { useContext, useState, useEffect } from "react";
import { recipeContext } from "../../context/recipeContext";
import { Formik, Field, Form } from "formik";
import { modes } from "../modals/modalModes";
import { addRecipeToDb, updateRecipeInDb } from "../../firebase/firestore";
import * as Yup from "yup";
import { authContext } from "../../context/authContext";

function RecipeForm({ modalMode, toggleModal }) {
	const { selectedRecipe, setSelectedRecipe } = useContext(recipeContext);
	const { currentUser } = useContext(authContext);
	const [formValues, setFormValues] = useState(null);

	// Array => string separated by newlines
	const convertFromArray = (array) => {
		return array.toString().split(",").join("\n");
	};

	// String separated by newlines => array
	const convertToArray = (string) => {
		return string.split("\n");
	};

	const handleSubmit = async (values) => {
		const recipe = {
			title: values.title,
			description: values.description,
			ingredients: convertToArray(values.ingredients),
			directions: convertToArray(values.directions),
		};

		if (!recipe.createdAt) {
			recipe.createdAt = new Date();
		}

		if (!recipe.uid) {
			recipe.uid = currentUser.uid;
		}

		if (modalMode === modes.create) {
			await addRecipeToDb(recipe);
			setSelectedRecipe(recipe);
			console.log(recipe);
		} else if (modalMode === modes.edit) {
			await updateRecipeInDb(recipe, selectedRecipe.id);
			setSelectedRecipe(recipe);
		}

		toggleModal();
	};

	useEffect(() => {
		if (selectedRecipe && modalMode === modes.edit) {
			setFormValues({
				title: selectedRecipe.title,
				description: selectedRecipe.description,
				ingredients: convertFromArray(selectedRecipe.ingredients),
				directions: convertFromArray(selectedRecipe.directions),
			});
		}
	}, [modalMode]);

	const initialValues = {
		title: "",
		description: "",
		ingredients: "",
		directions: "",
	};

	const validationSchema = Yup.object({
		title: Yup.string()
			.max(80, "Title must be less than 80 characters")
			.required("Required"),
		description: Yup.string().max(
			400,
			"Description must be less than 400 characters"
		),
		ingredients: Yup.string()
			.max(
				10000,
				"That's a lot of ingredients! The limit is 10,000 characters."
			)
			.required("Required"),
		directions: Yup.string()
			.max(
				10000,
				"This recipe is too complicated! The limit is 10,000 characters."
			)
			.required("Required"),
	});

	return (
		<Formik
			initialValues={formValues || initialValues}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
			enableReinitialize>
			{({ errors, touched }) => (
				<Form id="recipe-form" className="form recipe-form">
					<div className="field-wrapper">
						<label htmlFor="title">Title</label>
						<div className="error">{touched.title ? errors.title : null}</div>
						<Field id="title" name="title" placeholder="Cake" as="input" />
					</div>

					<div className="field-wrapper">
						<label htmlFor="description">Description</label>
						<div className="error">
							{touched.description ? errors.description : null}
						</div>
						<Field
							id="description"
							name="description"
							placeholder="A real cake recipe"
							as="textarea"
						/>
					</div>

					<div className="field-wrapper">
						<label htmlFor="ingredients">Ingredients</label>
						<p className="error">
							{touched.ingredients ? errors.ingredients : null}
						</p>
						<Field
							id="ingredients"
							name="ingredients"
							placeholder="milk&#10;eggs&#10;flour&#10;sugar"
							as="textarea"
						/>
						<p className="message">Type each ingredient on a new line</p>
					</div>

					<div className="field-wrapper">
						<label htmlFor="directions">Directions</label>
						<p className="error">
							{touched.directions ? errors.directions : null}
						</p>
						<Field
							id="directions"
							name="directions"
							placeholder="Mix everything together&#10;Bake at 350 degrees for 30 minutes&#10;Let cool&#10;Serve"
							as="textarea"
						/>
						<p className="message">Type each step on a new line</p>
					</div>
				</Form>
			)}
		</Formik>
	);
}

export default RecipeForm;
