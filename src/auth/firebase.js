import firebase, { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: process.env.REACT_APP_FB_API_KEY,
	authDomain: process.env.REACT_APP_FB_API_KEY,
	projectId: process.env.REACT_APP_FB_AUTH_DOMAIN,
	storageBucket: process.env.REACT_APP_FB_STORAGE_URL,
	messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FB_APP_ID,
};

const app = initializeApp(config);

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
