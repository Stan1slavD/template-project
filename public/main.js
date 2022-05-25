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
  getApiData(getTopUrl).then((data) =>
    data.artists.artist.forEach((item) => {
      createTopCard(item);
    })
  );
}

getTop();

document.querySelector(".header_search").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (e.target.value === "") {
      document.querySelector(".artist_content").innerHTML = "";
      document.querySelector(".name").innerHTML = "Топ исполнителей: ";
      getTop();
    } else
      getApiData(
        `http://ws.audioscrobbler.com/2.0/?method=track.search&limit=100&track=${e.target.value}&api_key=df38c708dacf8a79b214e81cbc3dbd3b&format=json`
      ).then((result) => {
        document.querySelector(".artist_content").innerHTML = "";
        document.querySelector(".name").innerHTML = "Результаты поиска: ";
        result.results.trackmatches.track.forEach((item) => {
          createSongCard(item);
        });
      });
  }
});

/** Создание карточки с топ-исполнителем
 *  @param {string} item - Json-объект с данными об исполнителе
 */
function createTopCard(item) {
  container = document.querySelector(".artist_content");

  element = document.createElement("div");
  element.className = "card";

  artistData = document.createElement("div");
  artistData.className = "artist_data";

  link = document.createElement("a");
  link.href = item.url;

  playBtn = document.createElement("img");
  playBtn.src = "play.png";
  playBtn.width = "30";
  playBtn.height = "30";
  playBtn.className = "play";

  artistName = document.createElement("p");
  artistName.className = "artist_name";
  artistName.textContent = item.name;

  data_container = document.createElement("div");
  data_container.className = "data_container";

  dataP = document.createElement("div");
  dataP.className = "data";

  dataL = document.createElement("div");
  dataL.className = "data";

  playlistNamePlaycount = document.createElement("p");
  playlistNamePlaycount.className = "playlist-name";
  playlistNamePlaycount.textContent = "Прослушиваний: ";

  playcount = document.createElement("p");
  playcount.classList.add("playlist-name", "number");
  playcount.textContent = item.playcount;

  playlistNameListeners = document.createElement("p");
  playlistNameListeners.className = "playlist-name";
  playlistNameListeners.textContent = "Слушателей: ";

  listeners = document.createElement("p");
  listeners.classList.add("playlist-name", "number");
  listeners.textContent = item.listeners;

  dataP.appendChild(document.createElement("hr"));
  dataP.appendChild(playlistNamePlaycount);
  dataP.appendChild(playcount);
  data_container.appendChild(dataP);

  dataL.appendChild(document.createElement("hr"));
  dataL.appendChild(playlistNameListeners);
  dataL.appendChild(listeners);
  data_container.appendChild(dataL);

  link.appendChild(playBtn);
  artistData.appendChild(link);
  artistData.appendChild(artistName);
  artistData.appendChild(data_container);
  element.appendChild(artistData);
  container.append(element);
}

/** Создание карточки песни
 *  @param {string} item - Json-объект с данными о песне
 */
function createSongCard(item) {
  container = document.querySelector(".artist_content");

  element = document.createElement("div");
  element.className = "card";

  artistData = document.createElement("div");
  artistData.className = "artist_data";

  link = document.createElement("a");
  link.href = item.url;

  playBtn = document.createElement("img");
  playBtn.src = "play.png";
  playBtn.width = "30";
  playBtn.height = "30";
  playBtn.className = "play";

  artistName = document.createElement("p");
  artistName.className = "artist_name";
  artistName.textContent = item.name;

  songName = document.createElement("p");
  songName.className = "song_artist_name";
  songName.textContent = item.artist;

  data_container = document.createElement("div");
  data_container.className = "data_container";

  data = document.createElement("div");
  data.className = "data";

  playlistNameListeners = document.createElement("p");
  playlistNameListeners.className = "playlist-name";
  playlistNameListeners.textContent = "Слушателей: ";

  listeners = document.createElement("p");
  listeners.classList.add("playlist-name", "number");
  listeners.textContent = item.listeners;

  div = document.createElement("div");

  data.appendChild(document.createElement("hr"));
  data.appendChild(playlistNameListeners);
  data.appendChild(listeners);
  data_container.appendChild(data);

  link.appendChild(playBtn);
  artistData.appendChild(link);
  div.appendChild(artistName);
  div.appendChild(songName);
  artistData.appendChild(div);
  artistData.appendChild(data_container);
  element.appendChild(artistData);
  container.append(element);
}
