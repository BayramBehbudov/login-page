import React, { useState } from "react";
import style from "./logandcreate.module.css";
import Login from "./components/Login";
import Create from "./components/Create";

const index = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div className={style.container}>
      <Login selected={selected} setSelected={setSelected} />
      <Create selected={selected}  setSelected={setSelected} />
    </div>
  );
};

export default index;
