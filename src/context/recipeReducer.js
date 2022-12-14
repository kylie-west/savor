export default function recipeReducer(state, action) {
	switch (action.type) {
		case "ADD_RECIPE":
			const newRecipe = action.payload;

			return {
				...state,
				recipes: [...state.recipes, newRecipe],
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
				recipes: state.recipes.filter((recipe) => recipe.id !== id),
			};

		// Replace all recipes in state with updated array
		case "UPDATE_RECIPES":
			return { ...state, recipes: action.payload };

		case "SET_SELECTED_RECIPE":
			return { ...state, selectedRecipe: action.payload };

		// Replace all labels in state with updated array (all labels found on current recipe objects in state)
		case "GET_LABELS":
			const recipes = action.payload;

			const alphabetize = (a, b) => {
				a = a.toLowerCase();
				b = b.toLowerCase();
				return a > b ? 1 : a < b ? -1 : 0;
			};

			const labelArrays = recipes.map((recipe) => recipe.labels);
			const labels = labelArrays.flat().sort(alphabetize);

			// Remove duplicate labels
			const uniqueLabels = labels.filter(
				(label, index) => labels.indexOf(label) === index
			);

			return { ...state, labels: uniqueLabels };

		case "UPDATE_LABELS":
			return { ...state, labels: action.payload };

		case "CLEAR_STATE":
			return {
				recipes: null,
				selectedRecipe: null,
				labels: null,
			};

		default:
			return state;
	}
}
