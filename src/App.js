import useFirebaseAuth from "./hooks/useFirebaseAuth";
import { Route, Routes } from "react-router-dom";
import AuthContextProvider from "./context/authContext";
import RecipeContextProvider from "./context/recipeContext";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
	const user = useFirebaseAuth();

	return (
		<AuthContextProvider>
			<RecipeContextProvider>
				<Routes>
					<Route path="/" element={<Dashboard user={user} />} />
					<Route path="/login" element={<Login user={user} />} />
					<Route path="/signup" element={<Signup user={user} />} />
					{/* TODO: 404 page */}
				</Routes>
			</RecipeContextProvider>
		</AuthContextProvider>
	);
}

export default App;
