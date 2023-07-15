import React, { useState } from "react";
import goggle from "../images/goggle.jpg";
import facebook from "../images/facebook.jpg";
const Right = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cnfPassword: "",
  });

  const [msg, setMsg] = useState({
    msgInfo: "",
    status: "",
  });

  function submitform(e) {
    e.preventDefault();

    if (
      user.name === "" ||
      user.email === "" ||
      user.password === "" ||
      user.cnfPassword === ""
    ) {
      setMsg({
        msgInfo: "Error : All the fields are mandatory",
        status: "error",
      });
      return;
    } else if (user.password !== user.cnfPassword) {
      setMsg({
        msgInfo: "Error: Password and Confirm Password must be same",
        status: "error",
      });
      return;
    } else {
      setMsg({
        msgInfo: "Successfully Created!",
        status: "success",
      });
    }
  }

  return (
    <div className="right">
      <div className="wrapper">
        <h1>Create Account</h1>
        <div className="social">
          <a href="">
            <img className="icons" src={goggle} alt="goggle" />
            <span>Sign up with Google</span>
          </a>
          <a href="">
            <img className="icons" src={facebook} alt="facebook" />
            <span>Sign up with Facebook</span>
          </a>
        </div>

        <div className="or"> - OR - </div>
        {/* form  */}

        <form>
          <input
            type="text"
            placeholder="Full name"
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
          />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => {
              setUser({ ...user, cnfPassword: e.target.value });
            }}
          />

          <button type="submit" onClick={submitform} className="btn">
            Create Account
          </button>
          <span
            id="err-message"
            className={msg.status === "success" ? "success-msg " : "error-msg "}
          >
            {msg.msgInfo}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Right;
