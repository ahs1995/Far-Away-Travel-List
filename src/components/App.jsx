import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems((prevValues) => {
      return [...prevValues, newItem];
    });
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList itemsArray={items} onDeleteItem={handleDeleteItem} />
      <Stats />
    </div>
  );
}

export default App;
