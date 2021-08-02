import React from "react";

function Pet({id, name, age, weight, gender,type,  isAdopted, onAdoptPet}) {

  if(gender === 'female') {
    gender = '♀'
  } else{
    gender = '♂'
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender}
          
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
       {isAdopted === true ?  <button className="ui disabled button">Already adopted</button> :
        <button onClick={() => onAdoptPet(id)} className="ui primary button">Adopt pet</button> }
      </div>
    </div>
  );
}

export default Pet;
