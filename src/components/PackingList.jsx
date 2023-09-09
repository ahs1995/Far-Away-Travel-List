import React, { useState } from "react";
import Item from "./Item";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

export default function PackingList({
  itemsArray,
  onDeleteItem,
  onToggleItem,
}) {
  const [sortBy, setSortBy] = useState("input");

  function handleSorting(e) {
    setSortBy(e.target.value);
  }
  let itemSorted;

  if (sortBy === "input") itemSorted = itemsArray;
  if (sortBy === "description")
    itemSorted = itemsArray
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    itemSorted = itemsArray.slice().sort((a, b) => a.packed - b.packed);

  return (
    <div className="list">
      <ul>
        {itemSorted.map((item) => {
          return (
            <Item
              itemObj={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
              key={item.id}
            />
          );
        })}
      </ul>
      <div>
        <select value={sortBy} onChange={handleSorting}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
      </div>
    </div>
  );
}
