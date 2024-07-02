import { useState } from "react";
import style from "./App.module.css";
import LogCreate from "./pages/log&create";

function App() {
  return (
    <div className={style.container}>
      <div className={style.context}>
        <LogCreate />
      </div>
    </div>
  );
}

export default App;
