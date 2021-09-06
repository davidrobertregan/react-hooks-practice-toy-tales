import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(newToy) {
    setToys([...toys, newToy])
  }

  function deleteToy(id) {
    setToys(toys.filter(toy => toy.id !== id))
  }

  // this is the trickiest for me. i forget how to do this properly
  function addToyLikes(id) {
    const newToys = toys.map(toy => toy.id === id ? {...toy, likes: toy.likes + 1} : toy)
    setToys(newToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} toys={toys}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} setToys={setToys} deleteToy={deleteToy} addToyLikes={addToyLikes}/>
    </>
  );
}

export default App;
