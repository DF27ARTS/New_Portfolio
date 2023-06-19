import React from "react";
import ProfesionNameAnimation from "./profesionNameAnimation";

const Header = () => {
  return (
    <section className="header-container">
      <div className="bubble-image-one"></div>
      <section className="header-image-container"></section>
      <section className="header-name-container">
        <ProfesionNameAnimation />
      </section>
    </section>
  );
};

export default Header;
