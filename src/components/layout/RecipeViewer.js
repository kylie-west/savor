import React from "react";
import Recipe from "../recipes/Recipe";
import RecipeToolbar from "./RecipeToolbar";

// The section of the dashboard where the selected recipe is displayed

function RecipeViewer() {
	return (
		<div>
			<RecipeToolbar />
			<Recipe />
		</div>
	);
}

export default RecipeViewer;
