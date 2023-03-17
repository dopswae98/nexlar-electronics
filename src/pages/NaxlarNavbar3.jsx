import React from "react";

const NaxlarNavbar3 = () => {
  return (
    <div className="NaxlarNavbar3 bg-light p-3 d-flex justify-content-between">
      <div className="d-flex justify-content-between container-fluid">
        <h6 className="my-auto fw-bold">Parts</h6>
        <h6 className="my-auto ms-5 fw-bold">Accesories</h6>
        <h6 className="my-auto ms-5 fw-bold">Devices</h6>
        <h6 className="my-auto ms-5 fw-bold">Buy Back</h6>
        <h6 className="my-auto ms-5 fw-bold text-danger me-3">
          %Sales & Deals
        </h6>
      </div>
      <div className="d-flex align-items-center justify-content-between ms-5">
        <span>
          <i className="fa fa-phone me-2"></i>
        </span>
        <p className="my-auto">
          Hotline
          <a
            href="tel:0773373786"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            +263773373786
          </a>
        </p>
      </div>
    </div>
  );
};

export default NaxlarNavbar3;
