import React from "react";
import { NavLink } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row col-sm-12 col-lg-9">
        <li className="flex-sm-fill text-sm-center">
          <NavLink
          exact
            to="/"
            className="nav-link"
            activeClassName= "nav-link active"
          >
            About
          </NavLink>
        </li>
        <li className="flex-sm-fill text-sm-center">
          <NavLink
            to="/portfolio"
            className="nav-link"
            activeClassName= "nav-link active"
          >
            Portfolio
          </NavLink>
        </li>
        <li className="flex-sm-fill text-sm-center">
          <NavLink
            to="/contact"
            className="nav-link"
            activeClassName= "nav-link active"
          >
            Contact
          </NavLink>
        </li>
        <a
          className="flex-sm-fill text-sm-center nav-link resume"
          href={require("../assets/images/resume.pdf")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../assets/images/resume-color-80.png")}
            alt="resume"
            height="28"
            width="28"
            className="resume"
          />
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          href="https://github.com/Dfellner92"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../assets/images/GitHub-icon.png")}
            alt="GitHub"
            height="25"
            width="25"
            className="github"
          />
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          href="https://www.linkedin.com/in/daniel-fellner-4ab95414b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../assets/images/LI-In-Bug.png")}
            alt="Linkedin"
            height="24"
            width="29"
            className="linkedin"
          />
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          href={require("../assets/images/D.Fellner Certificate.pdf")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../assets/images/Screen Shot 2020-09-08 at 2.33.49 PM.png")}
            alt="Certificate"
            height="24"
            width="29"
            className="resume"
          />
        </a>
    </nav>
  );
}

export default Navbar;
