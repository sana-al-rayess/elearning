import { Link } from "react-router-dom";
import "./admin-nav.css";
import Button from "../Button/button";

import React, { useState } from "react";

const NavAdmin = () => {
	const [clicked, setClicked] = useState(false);
	
	return (
		<div className="navbar">
			<div className="logo2">
				AdminPanel
			</div>
			<div className="links">
				
				<Link to="/courses" className="linking">
					Courses
				</Link>
                <Link to="/addCourse" className="linking">
					Add Course
				</Link>
                <Link to="/enrollments" className="linking">
					View Enrollments
				</Link>
				<Link to="/withdrawReq"className="linking">
					Withdrawal Requests
				</Link>
				<Link to="/files" className="linking">
					Upload Files
				</Link>


				<Button id="logout" className="linking">Logout
					
				</Button>
			</div>
		</div>
	);
};

export default NavAdmin;
