import React, { useState } from "react";

import './register.css';


function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

 
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };


  const handleSignUpClick = () => {
    window.location.href = "/login";
  };

  const handleSubmit = async (e) => {
    const form = e.target;
    setEmailError("");
    setPasswordError("");
    setNameError("");
   
    e.preventDefault();

    if (!name) {
      setNameError("Please enter your name");
      return;
    }

    if (!email) {
      setEmailError("Please enter your email");
      return;
    }else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      return;
    }


    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }



    const formData = new FormData(form);


  }

  return (
    <div>
      <div className="container-signup flex">
        <div className="flex column center">
          <a href="/" className="login-title-main white flex text-decoration-none" >
            <span style={{ color: '#038C8C' }}>Learn</span>Loop
          </a>
          <div id="signup-content" className="register-content round-edges">

            <form onSubmit={handleSubmit}>
              <div id="login-content" className="login-container1 flex column">
                <p className="login-title dark-purple">Register</p>
                <label htmlFor="name" required>Name</label>
                <input id="name"className="input round-edges"type="text"name="name"onChange={(e) => setName(e.target.value)} required/>
                {nameError && <p className="error">{nameError}</p>}
                <label htmlFor="email">Email</label>
                <input id="email" className="input round-edges" type="text" name="email" onChange={(e) => setEmail(e.target.value)}required  />
                {emailError && <p className="error">{emailError}</p>}
                <label htmlFor="password">Password</label>
                <input id="password" className="input round-edges" type="password" name="password" onChange={(e) => setPassword(e.target.value)}required/>
                {passwordError && <p className="error">{passwordError}</p>}

               
              </div>
              <button id="signup-btn" className="round-edges btn-signup" type="submit">
                Sign Up
              </button>
            </form>


            <div className="flex row">
              <p className="dark-purple">Already have an account?</p>
              <a href="#" className="content-btn" id="signup-content-btn btn" onClick={handleSignUpClick}>Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;