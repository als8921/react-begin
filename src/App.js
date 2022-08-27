import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  function onClick() {
    setValue((x) => x + 1);
  }
  console.log("UPDATE");
  function iRunOnlyOnce() {
    console.log("ONCE");
  }
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>ClickMe</button>
    </div>
  );
}

export default App;
