import React from "react";

import Details from "../blocks/Details";
// import Button from "../atoms/Button";

export default function Tile({ data }) {
  return (
    <div className="tile">
      {/* <image src="" alt="image comes here"></image> */}
      <Details {...data}></Details>
      {/* <Button handleClick={handleClick} value={value}></Button> */}
    </div>
  );
}
