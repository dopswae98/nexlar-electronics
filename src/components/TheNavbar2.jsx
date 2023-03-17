import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import { auth } from "./firebase.utils";

const TheNavbar2 = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <div className="Navbars container-md-fluid container">
        <nav className="navbar navbar-expand-lg navbar-dark pt-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <code>GI JOE SATELITES</code>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarText">
              <div className="mr-auto"></div>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 list-unstyled">
                <li className="nav-item ">
                  <a className="nav-link active" aria-current="page" href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    FEATURES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    PRICING
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    CONTACTS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    MAP
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    SATELITES
                  </a>
                </li>
                <li className="nav-item">
                  {currentUser ? (
                    <button
                      className="btn btn-warning "
                      href="#"
                      onClick={() => auth.signOut()}
                    >
                      LOGOUT
                    </button>
                  ) : (
                    <Link to="/signin">signin</Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default TheNavbar2;