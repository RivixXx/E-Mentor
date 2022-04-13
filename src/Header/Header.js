import "./header.css";

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <nav className="header__navigation">
                    <ul className="navigation__links">
                        <a href="#"><li className="navigation__link">О нас</li></a>
                        <a href="#"><li className="navigation__link">Платформа</li></a>
                        <a href="#"><li className="navigation__link">Курсы</li></a>
                        <a href="#"><li className="navigation__link">Лекции</li></a>
                        <a href="#"><li className="navigation__link">Тарифы</li></a>
                        <a href="#"><li className="navigation__link">Блог</li></a>
                        <a href="#"><li className="navigation__link">Контакты</li></a>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;