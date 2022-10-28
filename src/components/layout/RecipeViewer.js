import React from "react";
import Recipe from "../recipes/Recipe";
import RecipeToolbar from "./RecipeToolbar";
import { recipes } from "../../recipeData";

// The section of the dashboard where the selected recipe is displayed

function RecipeViewer() {
	return (
		<div className="recipe-viewer">
			<RecipeToolbar />
			<Recipe recipes={recipes} />
		</div>
	);
}

export default RecipeViewer;
