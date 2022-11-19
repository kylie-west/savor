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

	return (
		<authContext.Provider
			value={{ currentUser: state.currentUser, setCurrentUser }}>
			{props.children}
		</authContext.Provider>
	);
}
