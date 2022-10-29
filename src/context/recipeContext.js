import { createContext, useReducer } from "react";
import recipeReducer from "./recipeReducer";
import { recipes } from "../recipeData";

const initialState = {
	recipes: recipes,
	selectedRecipe: null,
};

export const recipeContext = createContext(initialState);

export default function RecipeContextProvider(props) {
	const [state, dispatch] = useReducer(recipeReducer, initialState);

	return (
		<recipeContext.Provider
			value={{
				recipes: state.recipes,
			}}>
			{props.children}
		</recipeContext.Provider>
	);
}
