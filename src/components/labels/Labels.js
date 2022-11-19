import { useState, useContext } from "react";
import { recipeContext } from "../../context/recipeContext";
import LabelsList from "./LabelsList";
import { updateRecipeInDb } from "../../firebase/firestore";

export default function Labels() {
	const [inputValue, setInputValue] = useState("");
	const { labels, selectedRecipe, setSelectedRecipe } =
		useContext(recipeContext);

	const handleChange = (e) => {
		e.preventDefault();

		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const updatedRecipe = {
			...selectedRecipe,
			labels: [...labels, inputValue],
		};

		updateRecipeInDb(updatedRecipe, selectedRecipe.id);
		setSelectedRecipe({ ...selectedRecipe, labels: [...labels, inputValue] });
		setInputValue("");
	};

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
