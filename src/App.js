import RecipeContextProvider from "./context/recipeContext";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<RecipeContextProvider>
			<div className="App">
				<Dashboard />
			</div>
		</RecipeContextProvider>
	);
}

export default App;
