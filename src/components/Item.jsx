import React from "react";

export default function Item({ itemObj, onDeleteItem }) {
  function handleDelete() {
    onDeleteItem(itemObj.id);
  }

  return (
    <li>
      <span>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={handleDelete}>X</button>
    </li>
  );
}
