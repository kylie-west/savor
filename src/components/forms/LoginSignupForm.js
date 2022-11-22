import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import {
	createUser,
	logInWithEmail,
	logInAnonymously,
} from "../../firebase/firebaseAuth";
import anonSetup from "../../functions/anonSetup";

function LoginSignupForm({ page }) {
	const navigate = useNavigate();

	const initialValues = {
		email: "",
		password: "",
	};

	const validationSchema = Yup.object({
		email: Yup.string().email().required("Required"),
		password: Yup.string().min(8).required("Required"),
	});

	const handleSubmit = async ({ email, password }) => {
		if (page === "signup") {
			await createUser(email, password);

			navigate("/");
		} else if (page === "login") {
			await logInWithEmail(email, password);

			navigate("/");
		}
	};

	const handleClickDemo = async () => {
		const { user } = await logInAnonymously();
		const recipes = anonSetup(user.uid);
		console.log(recipes);
		navigate("/");
	};

	return (
		<div className="login-signup-form">
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}>
				{({ errors, touched }) => (
					<Form id="login-signup-form" className="form">
						<div className="field-wrapper">
							<label htmlFor="email">Email</label>
							<div className="error">{touched.email ? errors.email : null}</div>
							<Field
								id="email"
								name="email"
								type="email"
								placeholder="Example@email.com"
								as="input"
							/>
						</div>

						<div className="field-wrapper">
							<label htmlFor="password">Password</label>
							<div className="error">
								{touched.password ? errors.password : null}
							</div>
							<Field
								id="password"
								name="password"
								type="password"
								placeholder="Must be at least 8 characters"
								as="input"
							/>
						</div>
					</Form>
				)}
			</Formik>
			<div className="btn-group">
				{page === "signup" ? (
					<Link to="/login" className="link">
						Log In
					</Link>
				) : page === "login" ? (
					<Link to="/signup" className="link">
						Create an Account
					</Link>
				) : null}
				<button className="btn btn-orange" onClick={handleClickDemo}>
					Demo
				</button>
				<button
					type="submit"
					form="login-signup-form"
					className="btn btn-primary">
					{page === "signup" ? "Sign Up" : page === "login" ? "Log In" : null}
				</button>
			</div>
		</div>
	);
}

export default LoginSignupForm;
