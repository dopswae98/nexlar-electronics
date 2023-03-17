import React, { createContext, useState, useEffect } from "react";
//import app from "./base.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [validated, setValidated] = useState(null);
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(true);
  const [modalData, setModalData] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [visibility, setVisibility] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState('')

  useEffect(() => {
    //app.auth().onAuthStateChanged((user) => {
    //setCurrentUser(user);
    setPending(false);
    // });

    //setCurrentUser(email);
    //setPending(false);
  }, []);

  if (pending) {
    return <>Loading...</>;
  }
  return (
    <AuthContext.Provider
      value={{
        userName,
        setUserName,
        currentUser,
        setCurrentUser,
        validated,
        setValidated,
        email,
        setEmail,
        modalData,
        setModalData,
        longitude,
        setLongitude,
        latitude,
        setLatitude,
        visibility,
        setVisibility,
        password,
        setPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
