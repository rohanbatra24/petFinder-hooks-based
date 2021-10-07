import React from "react";
import Pet from "./Pet";

export default function Results({ pets }) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {pets.length ? (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          ></Pet>
        ))
      ) : (
        <h2>No Pets Found</h2>
      )}
    </div>
  );
}
