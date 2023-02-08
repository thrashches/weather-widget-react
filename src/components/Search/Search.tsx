import React, { useContext, useEffect, useState } from "react";
import { getCities } from "../../api/requests";
import { SearchItem, ILocation } from "./SearchItem";
import config from "../../api/config";
import "./Search.scss";
import { LocationContext } from "../../context/LocationContext";

// Компонент поисковой строки

function Search() {
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState<ILocation[] | []>([]);
  const [itemsHeight, setItemsHeight] = useState(0);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value.toLowerCase());
  };
  const { location } = useContext(LocationContext);

  useEffect(() => {
    // Устанавливается задержка перед отправкой запроса,
    // чтобы избежать ограничения api
    if (userInput.length) {
      const searchTimeout = setTimeout(() => {
        getCities(userInput)
          .then((response: ILocation[]) => {
            setResults(response);
            setItemsHeight(response.length * 36);
          })
          .catch(() => {
            setResults([]);
            setItemsHeight(0);
          });
      }, config.REQUEST_TIMEOUT);
      return () => clearTimeout(searchTimeout);
    }
    else {
      setResults([]);
      setItemsHeight(0);
    }
  }, [userInput]);

  const searchItems = results.map((result, index) => {
    console.log(result)
    return <SearchItem {...result} key={index} />;
  });

  return (
    <div className="wrapper">
      <input
        type="text"
        className="search"
        placeholder="Начните вводить название для поиска"
        onInput={handleInput}
      />
      <ul
        className="dropdown"
        style={{height: itemsHeight}}
      >
        {searchItems}
      </ul>
    </div>
  );
}

export default Search;
