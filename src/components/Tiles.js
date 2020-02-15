import React from "react";
import Tile from "./Tile";

export default function Tiles({ list }) {
  console.log(list);
  return (
    <div className="tiles">
      {list.map(data => (
        <Tile key={`${data.id}`} data={data} />
      ))}
    </div>
  );
}
