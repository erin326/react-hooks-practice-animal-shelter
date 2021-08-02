import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {

  const displayPets = pets.map(pet => 
   
(  
    <Pet id={pet.id} key={pet.id} name={pet.name} type={pet.type} age={pet.age} weight={pet.weight} gender={pet.gender} onAdoptPet={onAdoptPet} isAdopted={pet.isAdopted}/> 
    )
    
)

  return <div className="ui cards">
    {displayPets}
  </div>;
}

export default PetBrowser;
