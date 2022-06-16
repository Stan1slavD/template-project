import React from "react";
import { HeaderContext } from "../context";
import { useContext } from "react";

function Header() {
  const { setSearchData } = useContext(HeaderContext);

  function getApiData(url) {
    return fetch(url)
      .then((res) => res.json())
      .catch((e) => console.log(e));
  }

  function getResult(value) {
    if (value !== "") {
      getApiData(
        `http://ws.audioscrobbler.com/2.0/?method=track.search&limit=100&track=${value}&api_key=df38c708dacf8a79b214e81cbc3dbd3b&format=json`
      ).then((data) => {
        return setSearchData(data.results.trackmatches.track);
      });
    } else setSearchData([]);
  }
  return (
    <header className="header">
      <a href="/" className="header_logo link">
        <img src="./logo.png" alt="logo" width="32" height="32" />
        <h1 className="header_title">Spotify</h1>
      </a>
      <input
        type="search"
        className="header_search"
        placeholder="Search..."
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            getResult(e.target.value);
          }
        }}
      />
      <nav className="header_navigation">
        <a href="/" className="link">
          Зарегистрироваться
        </a>
        <a href="/" className="link">
          Войти
        </a>
      </nav>
    </header>
  );
}

export default Header;
