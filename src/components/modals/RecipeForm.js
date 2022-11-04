import { useContext, useState, useEffect } from "react";
import { recipeContext } from "../../context/recipeContext";
import { Formik, Field, Form } from "formik";
import { modes } from "../modals/modalModes";
import { addRecipeToDb, updateRecipeInDb } from "../../firebase/firestore";

function RecipeForm({ modalMode, toggleModal }) {
	const { selectedRecipe, setSelectedRecipe } = useContext(recipeContext);
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
		if (modalMode === modes.edit) {
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

	return (
		<Formik
			initialValues={formValues || initialValues}
			onSubmit={handleSubmit}
			enableReinitialize>
			<Form id="recipe-form" className="recipe-form">
				<label htmlFor="title">Title</label>
				<Field id="title" name="title" placeholder="Cake" as="input" />

				<label htmlFor="description">Description</label>
				<Field
					id="description"
					name="description"
					placeholder="A real cake recipe"
					as="textarea"
				/>

				<label htmlFor="ingredients">Ingredients</label>
				<p>Type each ingredient on a new line</p>
				<Field
					id="ingredients"
					name="ingredients"
					placeholder="milk&#10;eggs&#10;flour&#10;sugar"
					as="textarea"
				/>

				<label htmlFor="directions">Directions</label>
				<p>Type each step on a new line</p>
				<Field
					id="directions"
					name="directions"
					placeholder="Mix everything together&#10;Bake at 350 degrees for 30 minutes&#10;Let cool&#10;Serve"
					as="textarea"
				/>
			</Form>
		</Formik>
	);
}

export default RecipeForm;
