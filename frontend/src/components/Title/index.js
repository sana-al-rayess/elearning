import React, { useState } from "react";
import Button from "../Button/button";

import './title.css';

const Slogan = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    
    localStorage.getItem("user_id") ? window.location.href = "/editor" : window.location.href = "/reg"
  };

  return (
    <div>
     
      <div className="flex slogan column">
        <div>
          <p className="slogan-txt">Student Panel</p>
        </div>
        <div>
          <p className="slogan-txt2"> Empowering Education Anytime, Anywhere</p></div>
        



      </div>
    </div>
  );
};

export default Slogan;
