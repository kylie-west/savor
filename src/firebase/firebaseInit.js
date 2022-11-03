import { initializeApp } from "firebase/app";

const config = {
	apiKey: "AIzaSyD5_SPaWHxadTCP-TxOtZcaFV1oFinBANE",
	authDomain: "savor-recipe-box.firebaseapp.com",
	projectId: "savor-recipe-box",
	storageBucket: "savor-recipe-box.appspot.com",
	messagingSenderId: "1:347138081437:web:6e3035faf43f1dc1264a74",
	appId: "347138081437",
};

export const app = initializeApp(config);
