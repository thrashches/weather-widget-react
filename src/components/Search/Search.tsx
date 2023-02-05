import React, { useEffect, useState } from "react";
import { getCities } from "../../api/requests";
import { SearchItem, SearchItemProps } from "./SearchItem";
import config from "../../api/config";
import "./Search.scss";

function Search() {
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState<SearchItemProps[] | []>([]);
  const [itemsHeight, setItemsHeight] = useState(0);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value.toLowerCase());
  };
  useEffect(() => {
    if (userInput.length) {
      const searchTimeout = setTimeout(() => {
        getCities(userInput)
          .then((response: SearchItemProps[]) => {
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
    <div>
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
