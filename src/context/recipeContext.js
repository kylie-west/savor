import { createContext, useReducer } from "react";
import recipeReducer from "./recipeReducer";
import { recipes } from "../recipeData";

const initialState = {
	recipes: recipes,
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

	return (
		<recipeContext.Provider
			value={{
				recipes: state.recipes,
				addRecipe,
				editRecipe,
				deleteRecipe,
			}}>
			{props.children}
		</recipeContext.Provider>
	);
}
