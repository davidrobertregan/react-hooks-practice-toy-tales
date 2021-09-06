import React, { useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setToys, deleteToy, addToyLikes}) {

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(r => r.json())
    .then(toys => setToys(toys))
  }, [])

  console.log(toys)

  return (
    <div id="toy-collection">{toys.map(toy => 
      <ToyCard 
        id={toy.id}
        deleteToy={deleteToy}
        addToyLikes={addToyLikes}
        key={toy.id}
        name={toy.name} 
        image={toy.image} 
        likes={toy.likes} 
      />)}
    </div>
  );
}

export default ToyContainer;
