import React, { useContext } from "react";

import app from "../components/base";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Redirect, withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/Auth";
import GetLatLong from "../components/GetLatLong";
import TheNavbar from "../components/TheNavbar";
import TheNavbar2 from "../components/TheNavbar2";
import config from '../components/firebase.utils';

const MainPage = ({ history }) => {
  const { setValidated, email, validated, setEmail } = useContext(AuthContext);

  const handleLogout = () => {
    //e.preventDefault();
    console.log("tagged", validated);
    setValidated(null);
    setEmail("");

    try {
      history.push("/menu");
    } catch (error) {
      alert(error);
    }

    if (!validated) {
      console.log("!validated", !validated);
      return <Redirect to="/" />;
    }
  };
  return (
    <>
      <GetLatLong />
      <Navbar bg="light" expand="lg">
        <div className="container py-2">
          <code className="fs-3">MapX</code>
          <code> {`Welcome ${email}`}</code>
          <Nav className="navbar me-5">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Satellites
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/allsatelites" className="nav-link active">
                    All Satellites
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/visiblesatelites" className="nav-link active">
                    Visible Satellites
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link to="/map" className="nav-link active ms-3">
              Map
            </Link>
            <Link
              to="/spystuff"
              className="nav-link active"
              style={{ display: email.includes("spyemail") ? "block" : "none" }}
            >
              Spy Stuff
            </Link>
            {/*<button className='btn btn-warning btn-sm ms-4' onClick={handleLogout}>Logout</button>*/}
            <button
              className="btn btn-warning btn-sm ms-4"
              onClick={() => config.auth().signOut()}
            >
              Logout
            </button>
          </Nav>
        </div>
      </Navbar>
      <div className="bg-dark py-auto">
        <TheNavbar2 />
      </div>
    </>
  );
};
export default withRouter(MainPage);
