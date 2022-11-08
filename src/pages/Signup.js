import React from "react";
import LoginSignup from "../components/layout/LoginSignup";
import LoginSignupForm from "../components/forms/LoginSignupForm";

function Signup() {
	return (
		<LoginSignup page={"signup"}>
			<LoginSignupForm page={"signup"} />
		</LoginSignup>
	);
}

export default Signup;
