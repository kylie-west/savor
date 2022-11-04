import { useContext, useEffect, useState } from "react";
import { recipeContext } from "../context/recipeContext";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firestore";
import Sidebar from "../components/layout/Sidebar";
import RecipeList from "../components/layout/RecipeList";
import RecipeViewer from "../components/layout/RecipeViewer";
import Modal from "../components/modals/Modal";
import useModal from "../hooks/useModal";
import { modes } from "../components/modals/modalModes";

function Dashboard() {
	const { recipes, updateRecipes, selectedRecipe, setSelectedRecipe } =
		useContext(recipeContext);
	const { isShowing, toggle } = useModal();
	const [modalMode, setModalMode] = useState(modes.create);

	useEffect(() => {
		// Watch for changes to Recipes collection in database and update app state accordingly
		const unsubscribe = onSnapshot(collection(db, "recipes"), (snapshot) => {
			const recipesArray = snapshot.docs.map((doc) => {
				return { ...doc.data(), id: doc.id };
			});

			updateRecipes(recipesArray);
		});

		if (recipes && !selectedRecipe) {
			setSelectedRecipe(recipes[0]);
		}

		// Unsubscribe when component is unmounted
		return () => unsubscribe();
	}, []);

	return (
		<div className="dashboard">
			<Modal
				isShowing={isShowing}
				toggle={toggle}
				modalMode={modalMode}
				selectedRecipe={selectedRecipe}
				setSelectedRecipe={setSelectedRecipe}
			/>
			<Sidebar setModalMode={setModalMode} toggleModal={toggle} />
			<RecipeList recipes={recipes} />
			<RecipeViewer
				selectedRecipe={selectedRecipe}
				setModalMode={setModalMode}
				toggleModal={toggle}
			/>
		</div>
	);
}

export default Dashboard;
