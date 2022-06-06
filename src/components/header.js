import React from "react";
import { Context } from "../context";
import { useContext } from "react";

function Header() {
  const { searchData, setSearchData } = useContext(Context);
  const { searchString, setSearchString } = useContext(Context);

  function getApiData(url) {
    return fetch(url)
      .then((res) => res.json())
      .catch((e) => console.log(e));
  }

  const add = (v) => {
    setSearchData(v);
  };

  function getResult(value) {
    getApiData(
      `http://ws.audioscrobbler.com/2.0/?method=track.search&limit=100&track=${value}&api_key=df38c708dacf8a79b214e81cbc3dbd3b&format=json`
    ).then((data) => {
      return setSearchData(data.results.trackmatches.track);
    });
  }
  return (
    <header className="header">
      <a href="/" class="header_logo link">
        <img src="./logo.png" alt="logo" width="32" height="32" />
        <h1 class="header_title">Spotify</h1>
      </a>
      <input
        type="search"
        class="header_search"
        placeholder="Search..."
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            getResult(e.target.value);
            setSearchString(e.target.value);
          }
        }}
      />
      <nav class="header_navigation">
        <a href="/" class="link">
          Зарегистрироваться
        </a>
        <a href="/" class="link">
          Войти
        </a>
      </nav>
    </header>
  );
}

export default Header;
