import React, { useState } from "react";

export const GrosoryItem = ({ item }) => {
  const [itemCOunt, setItemCount] = useState(0);

  return (
    <div>
      <div>{item}</div> <div>count{itemCOunt}</div>
      <button
        onClick={() => setItemCount(itemCOunt < 10 ? itemCOunt + 1 : itemCOunt)}
      >
        Inc
      </button>
      <button
        onClick={() => setItemCount(itemCOunt > 0 ? itemCOunt - 1 : itemCOunt)}
      >
        Dec
      </button>
    </div>
  );
};
