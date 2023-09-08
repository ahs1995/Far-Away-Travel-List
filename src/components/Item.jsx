import React from "react";

export default function Item({ itemObj, onDeleteItem, onToggleItem }) {
  function handleDelete() {
    onDeleteItem(itemObj.id);
  }

  function handleToggleChange() {
    onToggleItem(itemObj.id);
  }

  return (
    <li>
      <input
        type="checkbox"
        value={itemObj.packed}
        onChange={handleToggleChange}
      />
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={handleDelete}>X</button>
    </li>
  );
}
