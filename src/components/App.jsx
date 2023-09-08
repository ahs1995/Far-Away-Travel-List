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

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList itemsArray={items} />
      <Stats />
    </div>
  );
}

export default App;
