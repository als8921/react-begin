import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  function onClick() {
    setValue((x) => x + 1);
  }
  function onChange(e) {
    setKeyword(e.target.value);
  }

  useEffect(() => {
    console.log("Run Only Once");
  }, []);

  useEffect(() => {
    console.log("Run 'Keyword' Changes :", keyword);
  }, [keyword]);

  useEffect(() => {
    console.log("Run 'Counter' Changes :", counter);
  }, [counter]);

  useEffect(() => {
    console.log("Run 'Keyword, Counter' Changes :", keyword, counter);
  }, [counter, keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here.."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>ClickMe</button>
    </div>
  );
}

export default App;
