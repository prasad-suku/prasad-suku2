import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Loginstyle.css";
function SigninLogin() {
  const [action, setaction] = useState("Sign-In");
  return (
    <div className="container">
      <h3 className="Header">{action}</h3>

      <Form>
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input-group">
            <label>Name</label>
            <input type="email" placeholder="Enter email" />
          </div>
        )}
        <br />

        <div className="input-group" controlId="formBasicEmail">
          <label>Email</label>
          <input type="email" placeholder="Enter email" />
        </div>
        <br />
        <div className="input-group" controlId="formBasicEmail">
          <label>password</label>
          <input type="text" placeholder="Enter email" />
        </div>
        <div className="submit-grp">
          <div
            className={action === "Sign-In" ? "submit active" : "submit"}
            onClick={() => {
              setaction("Login");
            }}
          >
            Login
          </div>
          <div
            className={action === "Login" ? "submit active" : "submit"}
            onClick={() => {
              setaction("Sign-In");
            }}
          >
            Sigin
          </div>
        </div>
      </Form>
    </div>
  );
}

export default SigninLogin;
