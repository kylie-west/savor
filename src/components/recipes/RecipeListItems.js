import { useContext } from "react";
import { recipeContext } from "../../context/recipeContext";

// The actual list of recipes that goes in the Recipes Bar

function RecipeListItems() {
	const { recipes } = useContext(recipeContext);

	if (recipes) {
		return recipes.map((recipe) => <li key={recipe.id}>{recipe.title}</li>);
	} else return <p>You have no recipes.</p>;
}

export default RecipeListItems;
