const { useState, useEffect } = require("react");

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);

  const [status, setStatus] = useState("unloaded");
  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }
  }, [animal]);

  const requestBreedList = async () => {
    setBreedList([]);
    setStatus("loading");

    const res = await fetch(
      `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    );

    const data = await res.json();

    localCache[animal] = data.breeds || [];

    setBreedList(data.breeds);

    setStatus("loaded");
  };

  return [breedList, status];
}
