import { Card } from "../Components/Card";
import { useEffect, useState } from "react";
const DataFetch = () => {
  const [pokeData, setPokeData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [page, setPage] = useState(0);

  const previousHandler = () => {
    if (page <= 0) return setPage(0);
    setPage((prev) => prev - 20);
  };

  const nextHandler = () => {
    setPage((prev) => prev + 20);
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${page}`)
      .then((data) => data.json())
      .then((response) => setPokeData(response.results));
  }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      const masiveConsult = await Promise.all(
        pokeData.map(async (mapData) => {
          const dataFetch = await fetch(mapData.url);
          const dataJson = await dataFetch.json();
          return dataJson;
        })
      );
      setFinalData(masiveConsult);
    };
    fetchData();
  }, [pokeData]);

  return (
    <div>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {finalData.map((pokemons) => (
          <div key={pokemons.name}>
            <Card>
              <li>{pokemons.name}</li>
              <li>
                <img src={pokemons.sprites.front_default} alt={pokemons.name} />
              </li>
            </Card>
          </div>
        ))}
      </ul>
      <div className="flex justify-between mt-3">
        <button
          onClick={previousHandler}
          type="button"
          className="w-24 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
          Previous
        </button>
        <button
          onClick={nextHandler}
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DataFetch;
