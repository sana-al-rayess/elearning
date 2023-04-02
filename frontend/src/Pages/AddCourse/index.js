import React, { useState } from "react";

import NavAdmin from "../../components/NavAdmin";
import AddCourse from "../../components/AddCourse";
const HomePage = () => {


  return (
    <div className="content">

      <div className="navbar component3" > <NavAdmin /></div>
      
      <div className="component" > <AddCourse /></div>
    </div>
  );
}

export default HomePage;