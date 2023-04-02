import React, { useState } from "react";
import NavBar from '../../components/NavBar';
import Title from '../../components/Title';
// import Image from "../../images/wa1.jpeg";

const HomePage = () => {


  return (
    <div className="content">

      <div className="navbar component3" > <NavBar /></div>
      <div className="component" > <Title /></div>
      {/* <img src={Image} alt="pic1" /> */}
    </div>
  );
}

export default HomePage;