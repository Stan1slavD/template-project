import React from 'react';

function Aside() {
    return ( 
    <div>
        <ul class="tags">
            <li class="tag">
                <a href="/" class="header_logo link">
                    <img class="icon" src="./home.png" alt="logo" width="15" height="15"/> Главная

                </a>
            </li>
            <li class="tag">
                <a href="/" class="header_logo link">
                    <img class="icon" src="./search.png" alt="logo" width="15" height="15"/> Поиск

                </a>
            </li>
            <li class="tag">
                <a href="/" class="header_logo link">
                    <img class="icon" src="./lib.png" alt="logo" width="15" height="15"/> Моя медиатека
                </a>
            </li>

            <hr class="line"/>

            <li class="tag">
                <a href="/" class="header_logo link">
                    <img class="icon" src="./add.png" alt="logo" width="15" height="15"/> Создать плейлист

                </a>
            </li>
            <li class="tag">
                <a href="/" class="header_logo link">
                    <img class="icon" src="./heart.png" alt="logo" width="15" height="15"/> Любимые треки
                </a>
            </li>
        </ul>
        <div class="info">
            <p class="copyright">©2022</p>
            <nav class="footer_navigation">
                <a class="link" href="https://github.com/Stan1slavD" target="_blanc" rel="noopener">GitHub</a>
            </nav>
        </div>
    </div> );
}

export default Aside;