import React from "react";

function Card({ data }) {
  return (
    <div class="card">
      <div class="artist_data">
        <a href="https://www.last.fm/music/Coldplay/_/Viva+la+Vida">
          <img src="play.png" class="play" width="30" height="30" />
        </a>
        <div>
          <p class="artist_name">{data.name}</p>
          <p class="song_artist_name">{data.artist}</p>
        </div>
        <div class="data_container">
          <div class="data">
            <hr />
            <p class="playlist-name">Слушателей: </p>
            <p class="playlist-name number">{data.listeners}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
