import { app } from "./firebaseInit";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInAnonymously,
	signOut,
	deleteUser,
} from "firebase/auth";
import { deleteRecipeFromDb } from "./firestore";

export const auth = getAuth(app);

export const createUser = async (email, password) => {
	let user;
	let error;

	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		user = userCredential.user;
	} catch (e) {
		error = e;
		console.error(e.code, e.message);
	}

	return { user, error };
};

export const getUser = () => {
	return auth.currentUser;
};

export const logInWithEmail = async (email, password) => {
	let user;
	let error;

	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		user = userCredential.user;
	} catch (e) {
		error = e;
		console.error(e.code, e.message);
	}

	return { user, error };
};

export const logInAnonymously = async () => {
	let user;
	let error;

	try {
		const userCredential = await signInAnonymously(auth);
		user = userCredential.user;
	} catch (e) {
		error = e;
		console.error(e.code, e.message);
	}

	return { user, error };
};

export const logOut = async () => {
	await signOut(auth);
};

export const deleteUserAccount = async () => {
	const user = auth.currentUser;

	try {
		await deleteUser(user);
		console.log("User deleted.");
	} catch (e) {
		console.error(e.code, e.message);
	}
};

export const logOutAnon = async (recipes) => {
	const user = auth.currentUser;

	if (!user.email) {
		recipes.forEach(async (recipe) => await deleteRecipeFromDb(recipe.id));
	}

	await deleteUserAccount();
};

export const getErrorMessage = (e) => {
	switch (e.code) {
		case "auth/email-already-exists":
			return "That email is already in use.";
		case "auth/invalid-email":
			return "Invalid email";
		case "auth/invalid-password":
			return "Invalid password";
		case "auth/user-not-found":
			return "User not found";
		default:
			return "An error occurred.";
	}
};
