import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { AuthContext } from "../components/Auth";

import {
  auth,
  createUserProfileDocument,
  signInWithGoogle,
  config,
} from "../components/firebase.utils";
import { Redirect, withRouter } from "react-router-dom";

function OurLoginPage({ history }) {
  useEffect(() => {
    console.log(`currentUser ${currentUser}, Auth ${auth}`)
  }, [])
  
  const [currentUser, setCurrentUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const {
    email,
    password,
    setEmail,
    setPassword,
    setValidated,
    userName,
    setUserName,
  } = useContext(AuthContext);
  const [justifyActive, setJustifyActive] = useState("tab1");

  // const { email, password } = event.target.elements;

  const handlesLogin = useCallback(
    async (event) => {
      event.preventDefault();
      // var { email, password } = event.target.elements;
      try {
        await config
          .auth()
          .signInWithEmailAndPassword(email, password);
          // .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );


  if (currentUser) {
    return <Redirect to="/" />;
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = currentUser;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setCurrentUser({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = currentUser;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCurrentUser({ email: "", password: "" });
      <Redirect to="/MainPage" />;
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
  };

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50 bg-light">
      {`currentUser, ${currentUser}}`}
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div
              className="d-flex justify-content-between mx-auto"
              style={{ width: "40%" }}
            >
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
                onClick={signInWithGoogle}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>
          <form
            onSubmit={handlesLogin}
            style={{ marginTop: "0px", padding: "0px 0px" }}
            id="form1"
          >
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="form1"
              type="email"
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form2"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn className="mb-4 w-100" type="submit">
              Sign in
            </MDBBtn>
            <p className="text-center">
              Not a member? <a href="#!">Register</a>
            </p>
          </form>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === "tab2"}>
        <form onSubmit={handleSignUp}>
          <div className="text-center mb-3">
            <p>Sign In with:</p>

            <div
              className="d-flex justify-content-between mx-auto"
              style={{ width: "40%" }}
            >
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput
            wrapperClass="mb-4"
            label="Username"
            id="form1"
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
              setCurrentUser({ ...currentUser, displayName: e.target.value });
            }}
            required
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Email"
            id="form1"
            type="email"
            // value={currentUser.email}
            onChange={(e) => {
              setUserName(e.target.value);
              setCurrentUser({ ...currentUser, email: e.target.value });
            }}
            required
          />

          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form1"
            type="password"
            onChange={(e) => {
              setCurrentUser({ ...currentUser, password: e.target.value });
            }}
            required
          />
          <MDBInput
            wrapperClass="mb-4"
            label="confirmPassword"
            id="form1"
            type="password"
            onChange={(e) => {
              setCurrentUser({
                ...currentUser,
                confirmPassword: e.target.value,
              });
            }}
            required
          />

          <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="I have read and agree to the terms"
            />
          </div>

          <MDBBtn className="mb-4 w-100" type="submit">
            Sign up
            
          </MDBBtn>
            </form>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default withRouter(OurLoginPage);
