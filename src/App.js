import useFirebaseAuth from "./hooks/useFirebaseAuth";
import RecipeContextProvider from "./context/recipeContext";
import Dashboard from "./pages/Dashboard";

function App() {
	const user = useFirebaseAuth();

	return (
		<RecipeContextProvider>
			<div className="App">
				<Dashboard user={user} />
			</div>
		</RecipeContextProvider>
	);
}

export default App;
