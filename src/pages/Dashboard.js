import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { recipeContext } from "../context/recipeContext";
import { authContext } from "../context/authContext";
import { onSnapshot, query, where, orderBy } from "firebase/firestore";
import { recipesRef } from "../firebase/firestore";
import Sidebar from "../components/layout/Sidebar";
import RecipeList from "../components/layout/RecipeList";
import RecipeViewer from "../components/layout/RecipeViewer";
import Modal from "../components/modals/Modal";
import useModal from "../hooks/useModal";
import { modes } from "../components/modals/modalModes";
import LabelDrawer from "../components/labels/LabelDrawer";

function Dashboard({ user }) {
	const {
		recipes,
		updateRecipes,
		selectedRecipe,
		setSelectedRecipe,
		labels,
		getLabels,
		clearRecipeState,
	} = useContext(recipeContext);

	const { isShowing, toggle } = useModal();

	const [modalMode, setModalMode] = useState(modes.create);

	const [labelDrawerOpen, setLabelDrawerOpen] = useState(false);

	useEffect(() => {
		let unsubscribe;

		if (user) {
			// Watch for changes to Recipes collection in database and update app state accordingly
			unsubscribe = onSnapshot(
				query(
					recipesRef,
					where("uid", "==", user.uid),
					orderBy("title", "asc")
				),
				(snapshot) => {
					const recipesArray = snapshot.docs.map((doc) => {
						return { ...doc.data(), id: doc.id };
					});

					updateRecipes(recipesArray);
					getLabels(recipesArray);
				},
				(error) => {
					console.error(error);
				}
			);
		} else return;

		// Unsubscribe when component is unmounted
		return () => {
			unsubscribe();
		};
	}, []);

	useEffect(() => {
		if (recipes && !selectedRecipe) {
			setSelectedRecipe(recipes[0]);
		}
	}, []);

	// Redirect if no user logged in
	if (!user) {
		return <Navigate to="/login" replace />;
	} else {
		return (
			<div className="dashboard">
				<Modal
					isShowing={isShowing}
					toggle={toggle}
					modalMode={modalMode}
					selectedRecipe={selectedRecipe}
					setSelectedRecipe={setSelectedRecipe}
				/>
				<Sidebar
					user={user}
					recipes={recipes}
					setModalMode={setModalMode}
					toggleModal={toggle}
					labelDrawerOpen={labelDrawerOpen}
					setLabelDrawerOpen={setLabelDrawerOpen}
					clearState={clearRecipeState}
				/>
				<LabelDrawer
					labels={labels}
					open={labelDrawerOpen}
					setOpen={setLabelDrawerOpen}
					recipes={recipes}
				/>
				<RecipeList recipes={recipes} />
				<RecipeViewer
					selectedRecipe={selectedRecipe}
					setModalMode={setModalMode}
					toggleModal={toggle}
				/>
			</div>
		);
	}
}

export default Dashboard;
