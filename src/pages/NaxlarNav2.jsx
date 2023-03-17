import React from "react";
import "./Naxlarnavbar2.css";

const NaxlarNav2 = () => {
  return (
    <div>
      <div className="NaxlarNav2 container-fluid d-flex flex-shrink justify-content-md-between mt-2">
        <div className="logo d-flex align-items-center my-auto">
          <span className="my-2 mb-3">
            <i
              className="fa-solid fa-asterisk me-1"
              aria-hidden="true"
            ></i>
          </span>
          <h6>nexlarcellualar</h6>
        </div>
        <div className="form my-auto">
          <form className="d-flex align-items-md-center justify-content-center p-1">
            {/* <i className="fa fa-search"></i> */}
            <input
              className="form-control form-input me-2 search-bar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <p className="cat my-auto m-1 d-flex d-md-block d-none">
              categories <i className="fa fa-angle-down my-auto ms-1 me-1"></i>
            </p>
            <button className="button">
              <span className="left-pan">
                <i className="fa fa-search"></i>
              </span>
            </button>
          </form>
        </div>
        <div className="icons d-md-flex text-center align-items-center justify-content-between">
          <div className="right-icons me-3 d-flex align-items-center">
            <i className="fa fa-user"></i>
            <div className="ms-2">
                <p className="username my-auto">Welcome <br /><span className="fw-bold">Ephraim</span> </p>
            </div>
            {/* <p>Hi irfan</p> */}
          </div>
          <div className="right-icons me-5 ">
            <span className="badge badge-me badge-warning p-0 rounded-circle"><p className="text-danger text-center">1</p></span>
            <i className="fa fa-heart "></i>
            {/* <p>Quick Order</p> */}
          </div>
          <div className="right-icons me-5">
          <span className="badge badge-me badge-warning p-0 rounded-circle"><p className="text-danger text-center">1</p></span>
            <i className="fa fa-cart-plus"></i>
            {/* <p>Cart</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaxlarNav2;
