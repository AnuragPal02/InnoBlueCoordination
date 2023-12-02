// LoginLink.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const LoginLink = ({ onClick }) => {
  return (
    <NavLink to="/login" onClick={onClick} className="nav-link">
      <button style={{ backgroundColor: "red", color: "white" }}>Login</button>
    </NavLink>
  );
};

export default LoginLink;
