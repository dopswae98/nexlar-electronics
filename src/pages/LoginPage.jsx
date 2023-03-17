import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    // regex for validating email address
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (password !== "P@ssw0rd123") {
      setErrorMessage("Incorrect password.");
      return;
    }

    // navigate to main page and display user's identity and sign out button.

  };

  return (
    <div className="login-page">
      <h2>Login</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                               </Form.Group>


        <Form.Group controlId="formBasicPassword">
                         <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                          </Form.Group>              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                                                        <Button variant="primary" type="submit">Login</Button>         
                                                        </Form>       </div>     );   }; 
        export default LoginPage;