import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink
        exact="true"
        to="/"
        className={(navData) => (navData.isActive ? "nav-active" : "")}
      >
        Accueil
      </NavLink>
      <NavLink
        exact="true"
        to="/auteur"
        className={(navData) => (navData.isActive ? "nav-active" : "")}
      >
        Auteur
      </NavLink>
      <NavLink
        exact="true"
        to="/blog"
        className={(navData) => (navData.isActive ? "nav-active" : "")}
      >
        Blog
      </NavLink>
    </div>
  );
};

export default Navigation;
