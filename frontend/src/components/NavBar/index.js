import { Link } from "react-router-dom";
import "./navbar.css";
import Button from "../../components/Button/button";

import React, { useState } from "react";

const Navbar = () => {
	const [clicked, setClicked] = useState(false);
	const active_user = localStorage.getItem("user_id");
	const handleClick = () => {
		window.location.href = "/login";
		localStorage.clear();
	};

	const handleRoute = (route) => {
		return active_user ? route : "/reg";
	};
	return (
		<div className="navbar">
			<div className="logo">
				<span>Learn</span>Loop
			</div>
			<div className="links">
				<Link to="/home" className="linking">
					Home
				</Link>
				<Link to="/courses" className="linking">
					Courses
				</Link>
				<Link to={handleRoute("/Enroll")} className="linking">
					Enroll
				</Link>
				<Link to={handleRoute("/withdraw")} className="linking">
					Withdraw
				</Link>


				<Button id="logout" className="linking" onClick={handleClick}>
					{localStorage.getItem("user_id") ? "Log Out" : "Log in"}
				</Button>
			</div>
		</div>
	);
};

export default Navbar;
