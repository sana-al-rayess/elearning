import React, { useState } from "react";
import NavBar from '../../components/NavBar';
import Title from '../../components/Title';

const HomePage = () => {


  return (
    <div className="content">

      <div className="navbar component3" > <NavBar /></div>
      <div className="component" > <Title /></div>
   
    </div>
  );
}

export default HomePage;