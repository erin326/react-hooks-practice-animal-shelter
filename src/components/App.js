import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  const [adopted, setAdopted] = useState(false);



  function handleChangeType(event) {
    // console.log(event.target.value)
    filters.type = event.target.value
    // console.log(filters.type);
 
  }

  function handleFindPetsClick() {
    let fetchEnd = '';
    if(filters.type !== 'all') {
      fetchEnd += `?type=${filters.type}`

    }
      fetch(`http://localhost:3001/pets${fetchEnd}`)
      .then(r => r.json())
      .then(pets => {
        
        setPets(pets);
      
        
      })
      
  }

  function handleAdoptPet(id) {
       pets.map(pet => {
        if(pet.id === id) {
          console.log(pet);
          return pet.isAdopted = true;
        
        }else{
          return pet;
        }
     })
    setAdopted(adopted => !adopted);
    }
    
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleChangeType} onFindPetsClick={handleFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser onAdoptPet={handleAdoptPet} pets={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
