import React from "react";
import { GrosoryItem } from "./GrosoryItem";

const GrosoryBase = () => {
  const grosoryList = ["Fruits", "milk"];
  return (
    <div>
      {grosoryList.map((item, i) => (
        <div>
          <GrosoryItem item={item} />
        </div>
      ))}
    </div>
  );
};

export { GrosoryBase };
