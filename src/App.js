import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import doctors from "./doctors.json";
import Tiles from "./components/Tiles";

function App() {
  console.log(doctors);
  return (
    <>
      <h1>Doctors</h1>
      <Tiles list={doctors} />
    </>
  );
}

export default App;
