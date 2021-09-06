import React, { useState } from "react";

function ToyForm({ addToy, toys }) {

  const [formData, setFormData] = useState({
    name: "",
    image: ""
  })

  function handleChange(e) {
    const key =  e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [key]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newToy = {
      id: toys.length + 1,
      name: formData.name,
      image: formData.image,
      likes: 0
    }
    addToy(newToy)
    console.log(newToy)
    fetch("http://localhost:3001/toys",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
    setFormData({name: "", image: ""})
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          value={formData.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          value={formData.image}
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
