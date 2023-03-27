import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="about">About</Link>
      </li>
      <br />
      <li>
        <Link to="contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Navbar;
