import { recipes } from "../../recipeData";
import Recipe from "./Recipe";

// The actual list of recipes that goes in the Recipes Bar

function RecipeListItems() {
	return recipes.map((recipe) => <li>{recipe.title}</li>);
}

export default RecipeListItems;
