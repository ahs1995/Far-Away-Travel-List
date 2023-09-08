import React from "react";
import Item from "./Item";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

export default function PackingList({ itemsArray, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {itemsArray.map((item) => {
          return (
            <Item itemObj={item} onDeleteItem={onDeleteItem} key={item.id} />
          );
        })}
      </ul>
    </div>
  );
}
