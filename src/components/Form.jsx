import { useState } from "react";

export default function Form(props) {
  const [content, setContent] = useState({
    item: "",
    quantity: 1,
  });

  function handleSubmit(e) {
    e.preventDefault();

    props.onAdd(content);

    // if (!content.item) return;

    // const newItem = { description, quantity, packed: false, id: Date.now() };

    // setDescription("");
    // setQuantity(1);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setContent((prevContent) => {
      return {
        ...prevContent,
        [name]: value,
      };
    });
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your trip?</h3>

      <select name="quantity" onChange={handleChange} value={content.quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        name="item"
        type="text"
        placeholder="items..."
        value={content.item}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
