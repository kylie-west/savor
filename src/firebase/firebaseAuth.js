import { app } from "./firebaseInit";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInAnonymously,
	signOut,
} from "firebase/auth";

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
