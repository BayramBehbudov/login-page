import React from "react";
import style from "../logandcreate.module.css";

const Login = ({ selected, setSelected }) => {
  return (
    <div className={`${style.login} ${!selected && style.selected}`}>
      <h1
        onClick={() => {
          setSelected(false);
        }}
      >
        Log in
      </h1>
      <div className={`${style.form} ${selected && style.hidden}`}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
