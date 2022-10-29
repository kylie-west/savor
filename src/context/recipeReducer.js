import { recipes } from "../recipeData";

export default function recipeReducer(state, action) {
	switch (action.type) {
		case "ADD_RECIPE":
			const newRecipe = action.payload;

			return {
				...state,
				recipes: [...recipes, newRecipe],
			};

		case "EDIT_RECIPE":
			const editedRecipe = action.payload;

			// Go through all recipes; find the one that matches the id of the edited recipe and replace it.
			const updatedRecipes = state.recipes.map((recipe) => {
				if (recipe.id === editedRecipe.id) {
					return editedRecipe;
				}

				return recipe;
			});

			// Replace the recipes array with the updated array containing the edited recipe.
			return {
				...state,
				recipes: updatedRecipes,
			};

		case "DELETE_RECIPE":
			const id = action.payload;

			return {
				...state,
				recipes: recipes.filter((recipe) => recipe.id !== id),
			};

		default:
			return state;
	}
}
