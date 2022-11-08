import { useContext } from "react";
import { recipeContext } from "../../context/recipeContext";

// The actual list of recipes that goes in the Recipes Bar

function RecipeListItems() {
	const { recipes, getRecipeById, selectedRecipe, setSelectedRecipe } =
		useContext(recipeContext);

	const handleClick = (e) => {
		const recipeObj = getRecipeById(e.target.id);
		setSelectedRecipe(recipeObj);
	};

	if (recipes) {
		return recipes.map((recipe) => (
			<li
				key={recipe.id}
				id={recipe.id}
				onClick={handleClick}
				className={`${
					selectedRecipe && recipe.id === selectedRecipe.id ? "active" : ""
				}`}>
				{recipe.title}
			</li>
		));
	} else return <p>You have no recipes.</p>;
}

export default RecipeListItems;
