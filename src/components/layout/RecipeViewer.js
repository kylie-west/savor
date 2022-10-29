import React from "react";
import Recipe from "../recipes/Recipe";
import RecipeToolbar from "./RecipeToolbar";
import { useContext } from "react";
import { recipeContext } from "../../context/recipeContext";

// The section of the dashboard where the selected recipe is displayed

function RecipeViewer() {
	const { recipes } = useContext(recipeContext);

	return (
		<div className="recipe-viewer">
			<RecipeToolbar />
			<Recipe recipes={recipes} />
		</div>
	);
}

export default RecipeViewer;
