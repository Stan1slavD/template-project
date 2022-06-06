import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import TopCard from "./topCard";
import Card from "./Card";
import { Context } from "../context";
function Main() {
  const [topArtists, setTopArtists] = useState([]);
  const { searchData, setSearchData } = useContext(Context);
  const { searchString, setSearchString } = useContext(Context);

  const [arr, setArr] = useState([]);
  console.log("searchdata>", searchData);
  console.log("searchstring>", searchString);

  useEffect(() => {
    getTop();
    console.log("GGGGGG");
  }, []);

  const getTopUrl =
    "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=4d8ee139f9b64f2e68e42e8254d559f1&format=json";

  /** GET запрос к last.fm */
  function getApiData(url) {
    return fetch(url)
      .then((res) => res.json())
      .catch((e) => console.log(e));
  }
  /** Получение топ-исполнителей и информации о них */
  function getTop() {
    getApiData(getTopUrl).then((data) => {
      setTopArtists(data.artists.artist);
    });
  }

  if (searchString == "") {
    return (
      <main className="content">
        <h2 className="name">Топ исполнителей: </h2>
        <div className="artist_content">
          {topArtists.map((item) => {
            return <TopCard key={item.name} data={item}></TopCard>;
          })}
        </div>
      </main>
    );
  } else {
    return (
      <main className="content">
        <h2 className="name">Результаты поиска: </h2>
        <div className="artist_content">
          {searchData.map((item) => {
            return <Card key={item.url} data={item}></Card>;
          })}
        </div>
      </main>
    );
  }
}

export default Main;
