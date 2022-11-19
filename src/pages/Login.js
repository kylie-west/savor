import React from "react";
import { Navigate } from "react-router-dom";
import LoginSignup from "../components/layout/LoginSignup";
import LoginSignupForm from "../components/forms/LoginSignupForm";

function Login({ user }) {
	if (user) {
		return <Navigate to="/" replace />;
	} else
		return (
			<LoginSignup page={"login"}>
				<LoginSignupForm page={"login"} />
			</LoginSignup>
		);
}

export default Login;
