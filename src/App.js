import useFirebaseAuth from "./hooks/useFirebaseAuth";
import { Route, Routes } from "react-router-dom";
import RecipeContextProvider from "./context/recipeContext";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
	const user = useFirebaseAuth();

	return (
		<RecipeContextProvider>
			<Routes>
				<Route path="/" element={<Dashboard user={user} />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				{/* TODO: 404 page */}
			</Routes>
		</RecipeContextProvider>
	);
}

export default App;
