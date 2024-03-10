import React, { useState } from "react";
import "./App.css";
import Content from "./contents/Content";

function App() {
  const [value] = useState("hello");
  return (
    <>
      <div>
        {value}
        <div>{value}</div>
        <span>{value}</span>
      </div>
      <Content valueFromParent={value} />
    </>
  );
}

export default App;
