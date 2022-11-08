import { auth } from "../firebase/firebaseAuth";
import { useEffect } from "react";
import { useState } from "react";

const useFirebaseAuth = () => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			user ? setCurrentUser(user) : setCurrentUser(null);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return currentUser;
};

export default useFirebaseAuth;
