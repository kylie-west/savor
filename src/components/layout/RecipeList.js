import React from "react";
import RecipeListItems from "../recipes/RecipeListItems";

// Sidebar that displays the list of recipes

function RecipeList() {
	return (
		<div className="recipe-list">
			<h1>My Recipes</h1>
			<RecipeListItems />
		</div>
	);
}

export default RecipeList;
