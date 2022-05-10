function getTop() {
  fetch(
    "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=4d8ee139f9b64f2e68e42e8254d559f1&format=json"
  )
    .then((res) => res.json())
    .then((data) =>
      data.artists.artist.forEach((item) => {
        element = document.createElement("div");
        element.className = "card";
        container = document.querySelector(".artist_content");
        element.innerHTML = `<div class="artist_data"><button class="play"><img src="play.png" alt="Топ-50 (во всем мире)" width="30" height="30"></button>
    <p class="artist_name">${item.name}</p>
    <div class="data_container">
    <div class="data">
    <hr/>
    <p class="playlist-name">Прослушиваний: </p><p class="playlist-name number"> ${item.playcount}</p>
    </div>
    <div class="data">
    <hr/>
    <p class="playlist-name">Слушателей: </p><p class="playlist-name number">${item.listeners}</p>
    </div>
    </div>
    </div>`;
        element.addEventListener("click", () => window.open(item.url));
        container.append(element);
      })
    );
}

getTop();

const url =
  "http://www.last.fm/api/auth/?api_key=df38c708dacf8a79b214e81cbc3dbd3b";

function getToken() {
  let token = window.location.search.slice(7);
  if (token === "") {
    window.location.href =
      "http://www.last.fm/api/auth/?api_key=df38c708dacf8a79b214e81cbc3dbd3b";
    token = window.location.search.slice(7);
    console.log(token);
  }
}

document.querySelector(".header_search").addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    if (e.target.value === "") {
      document.querySelector(".artist_content").innerHTML = "";
      document.querySelector(".name").innerHTML = "Топ исполнителей: ";
      getTop();
    } else
      fetch(
        `http://ws.audioscrobbler.com/2.0/?method=track.search&limit=100&track=${e.target.value}&api_key=df38c708dacf8a79b214e81cbc3dbd3b&format=json`
      )
        .then((res) => res.json())
        .then((result) => {
          document.querySelector(".artist_content").innerHTML = "";
          document.querySelector(".name").innerHTML = "Результаты поиска: ";
          result.results.trackmatches.track.forEach((item) => {
            element = document.createElement("div");
            element.className = "card";
            container = document.querySelector(".artist_content");
            element.innerHTML = `<div class="artist_data"><button class="play"><img src="play.png" alt="Топ-50 (во всем мире)" width="30" height="30"></button>
                                    <div>
                                        <p class="artist_name">${item.name}</p>
                                        <p class="song_artist_name">${item.artist}</p>
                                    </div>
                                <div class="data_container">
                                    <div class="data">
                                        <hr/>
                                        <p class="playlist-name">Слушателей: </p><p class="playlist-name number">${item.listeners}</p>
                                    </div>
                                </div>
                            </div>`;
            element.addEventListener("click", () => window.open(item.url));
            container.append(element);
            console.log("1")
          });
        });
  }
});
