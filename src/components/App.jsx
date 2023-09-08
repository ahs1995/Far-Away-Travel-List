import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [contents, setContents] = useState([]);

  function addList(newContent) {
    setContents((prevValues) => {
      return [...prevValues, newContent];
    });
  }

  return (
    <div className="app">
      <Logo />
      <Form onAdd={addList} />
      <PackingList contentArray={contents} />
      <Stats />
    </div>
  );
}

export default App;
