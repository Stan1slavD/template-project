function TopCard({ data }) {
  return (
    <div className="card">
      <div className="artist_data">
        <a href={data.url}>
          <img src="play.png" className="play" width="30" height="30" />
        </a>
        <p className="artist_name">{data.name}</p>
        <div className="data_container">
          <div className="data">
            <hr />
            <p className="playlist-name">Прослушиваний: </p>
            <p className="playlist-name number">{data.playcount}</p>
          </div>
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

export default TopCard;
