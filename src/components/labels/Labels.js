import { useState, useContext, useEffect } from "react";
import { recipeContext } from "../../context/recipeContext";
import LabelsList from "./LabelsList";
import { updateRecipeInDb } from "../../firebase/firestore";

export default function Labels() {
	const [labels, setLabels] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const { recipes, selectedRecipe, setSelectedRecipe } =
		useContext(recipeContext);

	const handleChange = (e) => {
		e.preventDefault();

		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const updatedRecipe = {
			...selectedRecipe,
			labels: [...selectedRecipe.labels, inputValue],
		};

		updateRecipeInDb(updatedRecipe, selectedRecipe.id);
		setSelectedRecipe(updatedRecipe);
		setInputValue("");
	};

	useEffect(() => {
		if (recipes) {
			const labelArrays = recipes.map((recipe) => recipe.labels);
			const labels = labelArrays.flat();

			// Remove duplicate labels
			const uniqueLabels = labels.filter(
				(label, index) => labels.indexOf(label) === index
			);

			setLabels(uniqueLabels);
		}
	}, [recipes]);

	return (
		<div className="labels">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Enter label name"
					value={inputValue}
					onChange={handleChange}
				/>
			</form>

			<div>
				<LabelsList
					labels={labels}
					selectedRecipe={selectedRecipe}
					setSelectedRecipe={setSelectedRecipe}
				/>
			</div>
		</div>
	);
}
