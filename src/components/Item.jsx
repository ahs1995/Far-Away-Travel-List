import React from "react";

export default function Item({ itemObj }) {
  return (
    <li>
      <span>
        {itemObj.quantity} {itemObj.item}
      </span>
      <button>X</button>
    </li>
  );
}
