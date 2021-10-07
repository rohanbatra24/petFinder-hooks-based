import React, { useContext, useEffect, useState } from "react";
import useBreedList from "./hooks/useBreedList";
import Pet from "./Pet";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

export default function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(animal);
  const [pets, setPets] = useState([]);

  const [theme] = useContext(ThemeContext);

  // useEffect is same as componentDidMount
  useEffect(() => {
    requestPets();
  }, []);

  const requestPets = async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&breed=${breed}&location=${location}`
    );

    const data = await res.json();

    setPets(data.pets);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    requestPets();
  };

  return (
    <div className="my-0 mx-auto w-11/12">
      <form
        className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center divide-y divide-gray-900"
        onSubmit={handleSearchSubmit}
      >
        <label className="search-label" htmlFor="location">
          Location
          <input
            className="search-control"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label className="search-label" htmlFor="animal">
          Animal
          <select
            className="search-control"
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            <option value=""></option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label className="search-label" htmlFor="breed">
          Breed
          <select
            className="search-control disabled:opacity-50"
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            disabled={!animal ? true : false}
          >
            <option value=""></option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button
          className="rounded px-6 py-2 text-white hover:opacity-50 border-none "
          style={{ backgroundColor: theme }}
          type="submit"
        >
          Search
        </button>
      </form>
      <Results pets={pets}></Results>
    </div>
  );
}
