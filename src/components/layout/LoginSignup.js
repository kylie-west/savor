import React from "react";

function LoginSignup({ page, children }) {
	return (
		<div className="login-signup">
			<div className="header">
				<h1>
					Savor - <span>Your Online Recipe Box</span>
				</h1>
			</div>
			<div className="wrapper">
				<div className="card">
					<div className="card-header">
						<h2>
							{page === "signup"
								? "Create an Account"
								: page === "login"
								? "Log In"
								: null}
						</h2>
					</div>
					{children}
				</div>
			</div>
		</div>
	);
}

export default LoginSignup;
