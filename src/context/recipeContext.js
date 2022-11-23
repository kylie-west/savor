import { createContext, useReducer } from "react";
import recipeReducer from "./recipeReducer";

const initialState = {
	recipes: null,
	selectedRecipe: null,
	labels: null,
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

	const getLabels = (recipes) => {
		dispatch({ type: "GET_LABELS", payload: recipes });
	};

	const updateLabels = (labels) => {
		dispatch({ type: "UPDATE_LABELS", payload: labels });
	};

	const clearRecipeState = () => {
		dispatch({ type: "CLEAR_STATE", payload: null });
	};

	return (
		<recipeContext.Provider
			value={{
				recipes: state.recipes,
				selectedRecipe: state.selectedRecipe,
				labels: state.labels,
				addRecipe,
				editRecipe,
				deleteRecipe,
				updateRecipes,
				setSelectedRecipe,
				getRecipeById,
				getLabels,
				updateLabels,
				clearRecipeState,
			}}>
			{props.children}
		</recipeContext.Provider>
	);
}
