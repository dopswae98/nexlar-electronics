import React, { useState, useContext } from "react";
import { AuthContext } from "../components/Auth";
import { withRouter, Redirect } from "react-router";
import app from "./base";

const Login = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <div className="bg-light ">
      {validated ? "validated" : `not validated ${email}`}
      <div className="container py-5">
        {unValidated && (
          <p className="text-center text-danger">password or email error</p>
        )}
        <form onSubmit={handleSignUp}>
          <div className="row">
            <div className="col-md-5 mx-auto">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="password"
                />
              </div>
              <div className="form-check my-3 d-flex">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="flexCheckDefault"
                >
                  Remember Me
                </label>
              </div>
              <div className="mb-3">
                <button
                  type="submit"
                  onClick={() => handleSubmit}
                  className="btn btn-outline-info form-control"
                >
                  <code className="fs-6">SIGN IN </code>{" "}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);
