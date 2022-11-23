import { createContext, useReducer } from "react";
import authReducer from "./authReducer";

const initialState = {
	currentUser: null,
};

export const authContext = createContext();

export default function AuthContextProvider(props) {
	const [state, dispatch] = useReducer(authReducer, initialState);

	const setCurrentUser = (user) => {
		dispatch({ type: "SET_CURRENT_USER", payload: user });
	};

	const clearAuthState = () => {
		dispatch({ type: "CLEAR_STATE", payload: null });
	};

	return (
		<authContext.Provider
			value={{
				currentUser: state.currentUser,
				setCurrentUser,
				clearAuthState,
			}}>
			{props.children}
		</authContext.Provider>
	);
}
