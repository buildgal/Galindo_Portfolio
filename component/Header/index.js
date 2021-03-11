// import React from "react";
// //import { Link } from "react-router-dom";
// import "./style.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Technical Projects 
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signup"
              className={window.location.pathname === "/aboutme" ? "nav-link active" : "nav-link"}
            >
              About Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;