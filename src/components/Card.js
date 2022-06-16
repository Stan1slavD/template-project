function Card({ data }) {
  return (
    <div className="card">
      <div className="artist_data">
        <a href={data.url}>
          <img src="play.png" className="play" width="30" height="30" />
        </a>
        <div>
          <p className="artist_name">{data.name}</p>
          <p className="song_artist_name">{data.artist}</p>
        </div>
        <div className="data_container">
          <div className="data">
            <hr />
            <p className="playlist-name">Слушателей: </p>
            <p className="playlist-name number">{data.listeners}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
