import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = ({ onSort, filterVal, handleFilter, handleLogout }) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <div className="container py-2">
          <code className="fs-5">All Satelites</code>
          <Nav className="navbar me-5">
            <Dropdown className="me-5">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort By
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => onSort("asc")}>
                  {" "}
                  Ascending
                </Dropdown.Item>
                <Dropdown.Item onClick={() => onSort("desc")}>
                  {" "}
                  Descending
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <form className="d-flex">
              <input
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="search"
                id=""
                className="form-control text-center col-xs-5 me-2"
                aria-describedby="search-addon"
                value={filterVal}
                onInput={(e) => handleFilter(e)}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={(e) => e.preventDefault()}
              >
                Search
              </button>
            </form>
            <Link to="/">
              <button className="btn btn-sm btn-info ms-3" type="submit">
                Menu
              </button>
            </Link>
            <button
              className="btn btn-warning btn-sm ms-4"
              onClick={handleLogout}
            >
              Logout
            </button>
          </Nav>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
