import { createContext, useReducer } from "react";
import recipeReducer from "./recipeReducer";

const initialState = {
	recipes: null,
	selectedRecipe: null,
};

export const recipeContext = createContext();

export default function RecipeContextProvider(props) {
	const [state, dispatch] = useReducer(recipeReducer, initialState);

	const addRecipe = (recipe) => {
		dispatch({ type: "ADD_RECIPE", payload: recipe });
	};

	const editRecipe = (recipe) => {
		dispatch({ type: "EDIT_RECIPE", payload: recipe });
	};

	const deleteRecipe = (id) => {
		dispatch({ type: "DELETE_RECIPE", payload: id });
	};

	const updateRecipes = (recipes) => {
		dispatch({ type: "UPDATE_RECIPES", payload: recipes });
	};

	const setSelectedRecipe = (recipe) => {
		dispatch({ type: "SET_SELECTED_RECIPE", payload: recipe });
	};

	const getRecipeById = (id) => {
		const result = state.recipes.filter((recipe) => recipe.id === id);
		return result[0];
	};

	const updateLabels = (recipes) => {
		dispatch({ type: "UPDATE_LABELS", payload: recipes });
	};

	return (
		<recipeContext.Provider
			value={{
				recipes: state.recipes,
				selectedRecipe: state.selectedRecipe,
				addRecipe,
				editRecipe,
				deleteRecipe,
				updateRecipes,
				setSelectedRecipe,
				getRecipeById,
				updateLabels,
			}}>
			{props.children}
		</recipeContext.Provider>
	);
}
