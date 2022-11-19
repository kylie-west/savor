import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { recipeContext } from "../context/recipeContext";
import { authContext } from "../context/authContext";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase/firestore";
import Sidebar from "../components/layout/Sidebar";
import RecipeList from "../components/layout/RecipeList";
import RecipeViewer from "../components/layout/RecipeViewer";
import Modal from "../components/modals/Modal";
import useModal from "../hooks/useModal";
import { modes } from "../components/modals/modalModes";

function Dashboard({ user }) {
	const { currentUser, setCurrentUser } = useContext(authContext);

	const {
		recipes,
		updateRecipes,
		selectedRecipe,
		setSelectedRecipe,
		getLabels,
	} = useContext(recipeContext);

	const { isShowing, toggle } = useModal();

	const [modalMode, setModalMode] = useState(modes.create);

	useEffect(() => {
		if (user && !currentUser) {
			setCurrentUser(user);
		}
	}, [user]);

	useEffect(() => {
		let unsubscribe;

		if (user) {
			// Watch for changes to Recipes collection in database and update app state accordingly
			unsubscribe = onSnapshot(
				query(collection(db, "recipes"), where("uid", "==", user.uid)),
				(snapshot) => {
					const recipesArray = snapshot.docs.map((doc) => {
						return { ...doc.data(), id: doc.id };
					});

					updateRecipes(recipesArray);
					getLabels(recipesArray);
				}
			);
		} else return null;

		// Unsubscribe when component is unmounted
		return () => {
			console.log("Unsubscribe");
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
}

export default Dashboard;
