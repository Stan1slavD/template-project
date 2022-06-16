function Aside() {
  return (
    <div>
      <ul className="tags">
        <li className="tag">
          <a href="/" className="header_logo link">
            <img
              className="icon"
              src="./home.png"
              alt="logo"
              width="15"
              height="15"
            />{" "}
            Главная
          </a>
        </li>
        <li className="tag">
          <a href="/" className="header_logo link">
            <img
              className="icon"
              src="./search.png"
              alt="logo"
              width="15"
              height="15"
            />{" "}
            Поиск
          </a>
        </li>
        <li className="tag">
          <a href="/" className="header_logo link">
            <img
              className="icon"
              src="./lib.png"
              alt="logo"
              width="15"
              height="15"
            />{" "}
            Моя медиатека
          </a>
        </li>

        <hr className="line" />

        <li className="tag">
          <a href="/" className="header_logo link">
            <img
              className="icon"
              src="./add.png"
              alt="logo"
              width="15"
              height="15"
            />{" "}
            Создать плейлист
          </a>
        </li>
        <li className="tag">
          <a href="/" className="header_logo link">
            <img
              className="icon"
              src="./heart.png"
              alt="logo"
              width="15"
              height="15"
            />{" "}
            Любимые треки
          </a>
        </li>
      </ul>
      <div className="info">
        <p className="copyright">©2022</p>
        <nav className="footer_navigation">
          <a
            className="link"
            href="https://github.com/Stan1slavD"
            target="_blanc"
            rel="noopener"
          >
            GitHub
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Aside;
