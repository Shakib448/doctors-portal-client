import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link mr-5" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-5" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-5" href="#">
                Dental Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-5 text-white" href="#">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-5 text-white" href="#">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-5 text-white" href="#">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
