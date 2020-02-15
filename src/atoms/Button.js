import React from "react";

export default function Button({ handleClick, value }) {
  return <input type="button" value={value} onClick={handleClick}></input>;
}
