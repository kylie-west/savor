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

	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		user = userCredential.user;
	} catch (e) {
		console.error(e.code, e.message);
	}

	return user;
};

export const logInWithEmail = async (email, password) => {
	let user;

	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		user = userCredential.user;
	} catch (e) {
		console.error(e.code, e.message);
	}

	return user;
};

export const logOut = async () => {
	await signOut(auth);
};
