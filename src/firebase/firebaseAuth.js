import { app } from "./firebaseInit";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
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
		return;
	}

	return { user, error };
};

export const logOut = async () => {
	await signOut(auth);
};
