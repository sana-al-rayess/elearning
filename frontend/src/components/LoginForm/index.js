import React, { useState } from "react";
import "./login.css";

function LoginForm() {
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [loginError, setLoginError] = useState("");

	const handleSignUpClick = () => {
		window.location.href = "/reg";
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		setEmailError("");
		setPasswordError("");
		setLoginError("");

		if (!formData.get("email")) {
			setEmailError("Please enter an email");
			return;
		}

		if (!formData.get("password")) {
			setPasswordError("Please enter a password");
			return;
		}

		
	};
	return (
		<div>
			<div className="container flex">
				<div className="flex column center">
					<a
						href="/"
						className="login-title-main white flex text-decoration-none">
						<span style={{ color: "#038C8C" }}>Learn</span>Loop
					</a>

					<div id="registercontent" className="register-content round-edges">
						<form onSubmit={handleSubmit}>
							<div id="login-content" className="login-container flex column">
								<p className="login-title dark-purple">Login</p>
								<label className="dark-purple" htmlFor="login-email">
									Email
								</label>
								<input
									type="email"
									className="input round-edges"
									id="email"
									name="email"
								/>

								<label className="dark-purple" htmlFor="login-pass">
									Password
								</label>
								<input
									type="password"
									className="input round-edges"
									id="password"
									name="password"
								/>
							</div>

							<div className="flex">
								{/* {error && <p className="error">{error}</p>} */}
								{emailError && <p className="error">{emailError}</p>}
								{passwordError && <p className="error">{passwordError}</p>}
								{loginError && <p className="error">{loginError}</p>}
							</div>
							<button type="submit" className="login-btn round-edges btn">
								Log In
							</button>
						</form>
						<div className="flex row">
							<p className="dark-purple">Don't have an account?</p>
							<a
								href="#"
								className="content-btn"
								id="signup-content-btn btn"
								onClick={handleSignUpClick}>
								SignUp
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default LoginForm;
