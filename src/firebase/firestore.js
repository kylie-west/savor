import {
	getFirestore,
	collection,
	doc,
	getDocs,
	getDoc,
	addDoc,
	deleteDoc,
	updateDoc,
} from "firebase/firestore";
import { app } from "./firebaseInit";

// Initialize Firestore service
export const db = getFirestore(app);

// Recipes collection ref
const recipesRef = collection(db, "recipes");

// Get all recipes
export const getRecipes = async () => {
	let snapshot;
	const recipes = [];

	try {
		snapshot = await getDocs(recipesRef);
	} catch (e) {
		console.error("Error retrieving documents: ", e.message);
	}

	snapshot.forEach((doc) => {
		recipes.push({ ...doc.data(), id: doc.id });
	});

	console.log(recipes);
	return recipes;
};

// Get a single recipe
export const getRecipe = async (id) => {
	const docRef = doc(db, "recipes", id);
	let recipe;

	try {
		recipe = await getDoc(docRef);
	} catch (e) {
		console.error("Error retrieving document: ", e.message);
	}

	return recipe;
};

export const addRecipeToDb = async (recipeObj) => {
	try {
		await addDoc(recipesRef, recipeObj);
	} catch (e) {
		console.error("Error creating document: ", e.message);
	}
};

export const addTestRecipeToDb = async () => {
	try {
		await addDoc(recipesRef, {
			title: "test recipe",
			description: "this is a test",
		});
	} catch (e) {
		console.error("Error creating document: ", e.message);
	}
};

export const deleteRecipeFromDb = async (id) => {
	const docRef = doc(db, "recipes", id);

	try {
		deleteDoc(docRef);
	} catch (e) {
		console.error("Error deleting document: ", e.message);
	}
};

export const updateRecipeInDb = async (recipeObj) => {
	const docRef = doc(db, "recipes", recipeObj.id);

	try {
		updateDoc(docRef, recipeObj);
	} catch (e) {
		console.error("Error updating document: ", e.message);
	}
};
