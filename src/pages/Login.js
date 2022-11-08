import React from "react";
import LoginSignup from "../components/layout/LoginSignup";
import LoginSignupForm from "../components/LoginSignupForm";

function Login() {
	return (
		<LoginSignup page={"login"}>
			<LoginSignupForm page={"login"} />
		</LoginSignup>
	);
}

export default Login;
