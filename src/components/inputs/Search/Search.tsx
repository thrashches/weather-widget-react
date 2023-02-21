import React, { useContext, useEffect, useState } from "react";
import { getCities } from "../../../api/requests";
import SearchItem from "../SearchItem/SearchItem";
import { ILocation } from "../../../api/types";
import config from "../../../api/config";
import "./Search.scss";
import { LocationContext } from "../../../context/LocationContext";
import SelectedLocation from "../SelectedLocation/SelectedLocation";
import LocationBtn from "../../controls/LocationBtn/LocationBtn";

/**
 * Компонент поисковой строки
 */
function Search() {
  const [userInput, setUserInput] = useState("");
  const defaultInputStyle = {
    borderBottomRightRadius: "5px",
    borderBottomLeftRadius: "5px",
  };
  const [inputStyle, setInputStyle] = useState(defaultInputStyle);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value);
    if (!e.currentTarget.value.length) {
      setInputStyle(defaultInputStyle);
    }
  };
  const { location, setCurrentLocation, results, setSearchResults } =
    useContext(LocationContext);

  useEffect(() => {
    // Устанавливается задержка перед отправкой запроса,
    // чтобы избежать ограничения api
    if (userInput.length) {
      const searchTimeout = setTimeout(() => {
        getCities(userInput)
          .then((response: ILocation[]) => {
            setSearchResults(response);
            if (response.length) {
              setInputStyle({
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
              });
            }
          })
          .catch(() => {
            setSearchResults([]);
            setInputStyle(defaultInputStyle);
          });
      }, config.REQUEST_TIMEOUT);
      return () => clearTimeout(searchTimeout);
    } else {
      setSearchResults([]);
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
          <div className="search__input-wrapper">
            <input
              type="text"
              className="search__input"
              placeholder="Начните вводить название для поиска"
              style={searchItems.length ? inputStyle : defaultInputStyle}
              onInput={handleInput}
              value={userInput}
            />
            <div className="geo-btn">
              <LocationBtn />
            </div>
          </div>

          <ul className="dropdown" style={{ height: searchItems.length * 36 }}>
            {searchItems}
          </ul>
        </>
      )}
    </div>
  );
}

export default Search;
