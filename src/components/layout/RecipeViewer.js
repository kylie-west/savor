import React from "react";
import Recipe from "../recipes/Recipe";
import RecipeToolbar from "./RecipeToolbar";

// The section of the dashboard where the selected recipe is displayed

function RecipeViewer({ setModalMode, toggleModal, selectedRecipe }) {
	return (
		<div className="recipe-viewer">
			<RecipeToolbar setModalMode={setModalMode} toggleModal={toggleModal} />
			<Recipe selectedRecipe={selectedRecipe} />
		</div>
	);
}

export default RecipeViewer;
