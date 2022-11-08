import { app } from "./firebaseInit";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

export const auth = getAuth(app);

export const createUser = async (auth, email, password) => {
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

export const logInWithEmail = async (auth, email, password) => {
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
