import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import State from "./topics/controlledVsUncontrolled";

function App() {
  return (
    <div className="App">
      <State name="ashish" age="20"></State>
    </div>
  );
}

export default App;
