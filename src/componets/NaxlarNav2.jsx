import React from "react";
import "./Naxlarnavbar2.css";

const NaxlarNav2 = () => {
  return (
    <div className="container-fluid d-flex flex-row align-items-center justify-content-between mt-2">
      <div className="d-flex align-items-center my-auto">
        <span className="my-2 mb-3">
          <i
            className="fa-solid fa-mobile text-warning me-1"
            aria-hidden="true"
          ></i>
        </span>
        <h6>nexlarcellualar</h6>
      </div>
      <div className="form">
        <form className="d-flex align-items-center p-1">
          {/* <i className="fa fa-search"></i> */}
          <input
            className="form-control form-input me-2 search-bar "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <p className="my-auto m-1 d-flex">
            categories <i className="fa fa-angle-down my-auto ms-1 me-1"></i>
          </p>
          <button className="button">
            <span className="left-pan">
              <i className="fa fa-search"></i>
            </span>
          </button>
        </form>
      </div>
      <div className="icons d-flex text-center">
        <div className="right-icons me-3">
          <i className="fa fa-user"></i>
          <p>Hi irfan</p>
        </div>
        <div className="right-icons me-3">
          <i className="fa fa-bag-shopping"></i>
          <p>Quick Order</p>
        </div>
        <div className="right-icons">
          <i className="fa fa-cart-plus"></i>
          <p>Cart</p>
        </div>
      </div>
    </div>
  );
};

export default NaxlarNav2;
