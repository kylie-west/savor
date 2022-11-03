import { useContext, useEffect } from "react";
import { recipeContext } from "../context/recipeContext";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firestore";
import Sidebar from "../components/layout/Sidebar";
import RecipeList from "../components/layout/RecipeList";
import RecipeViewer from "../components/layout/RecipeViewer";

function Dashboard() {
	const { recipes, updateRecipes } = useContext(recipeContext);

	useEffect(() => {
		// Watch for changes to Recipes collection in database and update app state accordingly
		const unsubscribe = onSnapshot(collection(db, "recipes"), (snapshot) => {
			const recipesArray = snapshot.docs.map((doc) => {
				return { ...doc.data(), id: doc.id };
			});

			updateRecipes(recipesArray);
			console.log(recipes);
		});

		// Unsubscribe when component is unmounted
		return () => unsubscribe();
	}, []);

	return (
		<div className="dashboard">
			<Sidebar />
			<RecipeList recipes={recipes} />
			<RecipeViewer recipes={recipes} />
		</div>
	);
}

export default Dashboard;
