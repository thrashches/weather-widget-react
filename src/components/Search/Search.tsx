import React, { useContext, useEffect, useState } from "react";
import { getCities } from "../../api/requests";
import { SearchItem, ILocation } from "./SearchItem";
import config from "../../api/config";
import "./Search.scss";
import { LocationContext } from "../../context/LocationContext";
import SelectedLocation from "./SelectedLocation";

/**
 * Компонент поисковой строки
 */
function Search() {
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState<ILocation[] | []>([]);
  const [itemsHeight, setItemsHeight] = useState(0);

  const defaultInputStyle = {
    borderBottomRightRadius: "5px",
    borderBottomLeftRadius: "5px",
  };
  const [inputStyle, setInputStyle] = useState(defaultInputStyle);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value.toLowerCase());
    if (!e.currentTarget.value.length) {
      setInputStyle(defaultInputStyle);
    }
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
            if (response.length) {
              setInputStyle({
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
              });
            }
          })
          .catch(() => {
            setResults([]);
            setItemsHeight(0);
            setInputStyle(defaultInputStyle);
          });
      }, config.REQUEST_TIMEOUT);
      return () => clearTimeout(searchTimeout);
    } else {
      setResults([]);
      setItemsHeight(0);
    }
  }, [userInput]);

  const searchItems = results.map((result, index) => {
    return <SearchItem {...result} key={index} />;
  });

  return (
    <div className="wrapper">
      {location ? (
        <SelectedLocation {...location} />
      ) : (
        <>
          <input
            type="text"
            className="search"
            placeholder="Начните вводить название для поиска"
            style={inputStyle}
            onInput={handleInput}
            value={userInput}
          />
          <ul className="dropdown" style={{ height: itemsHeight }}>
            {searchItems}
          </ul>
        </>
      )}
    </div>
  );
}

export default Search;
