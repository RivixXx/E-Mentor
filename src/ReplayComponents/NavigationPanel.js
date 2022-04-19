import { Link } from "react-router-dom";

function NavigationPanel() {
    return (
        <>
            <nav className="header__navigation">
                <ul className="navigation__links">
                    <Link to="/"><li className="navigation__link">О нас</li></Link>
                    <Link to="#"><li className="navigation__link">Платформа</li></Link>
                    <Link to="/AppPage2"><li className="navigation__link">Курсы</li></Link>
                    <Link to="#"><li className="navigation__link">Лекции</li></Link>
                    <Link to="#"><li className="navigation__link">Тарифы</li></Link>
                    <Link to="#"><li className="navigation__link">Блог</li></Link>
                    <Link to="#"><li className="navigation__link">Контакты</li></Link>
                </ul>
            </nav>
            
        </>
    )
}

export default NavigationPanel;