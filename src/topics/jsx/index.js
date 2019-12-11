import React from "react";

function Jsx() {
  var a = "<"; // First converts to string and then renders to prevent injection attack.
  return <div> {a} </div>;
}

export default Jsx;
