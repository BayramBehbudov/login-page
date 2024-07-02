import React from "react";
import style from "../logandcreate.module.css";

const Create = ({selected,setSelected}) => {
  return (
    <div className={`${style.create} ${selected && style.selected}`}>
      <h1
        onClick={() => {
          setSelected(true);
        }}
      >
        Register
      </h1>
      <div className={`${style.form} ${!selected && style.hidden}`}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="date" placeholder="Birthday" />
        <input type="password" placeholder="Password" />

        <button>Create</button>
      </div>
    </div>
  );
};

export default Create;
