import React from "react";

const NaxlarTopNav = () => {
  return (
    <div className="container-fluid d-flex flex-row align-items-center justify-content-between bg-light">
      <div className="left d-flex align-items-center">
        <span>
          <i className="fa-solid fa-truck-fast me-2"></i>
        </span>
        <p className="my-2">Free Shipping on orders starts at $400</p>
        <div className="d-flex align-items-center ms-3">
          <span>
            <i className="fa-regular fa-snowflake me-2"></i>
          </span>
          <p className="my-2 ">Lifetime warrant </p>
        </div>
        <div className="d-flex align-items-center ms-3">
          <span>
            <i className="fa-solid fa-scissors me-1"></i>
          </span>
          <p className="my-2">Up to 8pm order CutsOff</p>
        </div>
      </div>
      <div className="right d-flex align-items-center">
        <div className="d-flex align-items-center">
          <span>
            <i className="fa-solid fa-truck-fast me-2"></i>
          </span>
          <p className="my-2 me-4">Knowledge Base</p>
        </div>
        <div className="d-flex align-items-center">
          <p className="my-2 me-4">About Us </p>
        </div>
        <div className="d-flex align-items-center">
          <p className="my-2 me-4">Blog</p>
        </div>
        <div>
          <p className="my-2 me-4">Contact us</p>
        </div>
      </div>
    </div>
  );
};

export default NaxlarTopNav;
