import { Link } from "react-router-dom";

function NavigationPanel(props) {
    return (
        <>
            <nav className="header__navigation">
                <ul className="navigation__links">
                    <Link to="/"><li className="navigation__link" style={{ color: props.color }}>О нас</li></Link>
                    <Link to="/"><li className="navigation__link" style={{ color: props.color }}>Платформа</li></Link>
                    <Link to="/AppPage2"><li className="navigation__link" style={{ color: props.color }}>Курсы</li></Link>
                    <Link to="/"><li className="navigation__link" style={{ color: props.color }}>Лекции</li></Link>
                    <Link to="/"><li className="navigation__link" style={{ color: props.color }}>Тарифы</li></Link>
                    <Link to="/"><li className="navigation__link" style={{ color: props.color }}>Блог</li></Link>
                    <Link to="/"><li className="navigation__link" style={{ color: props.color }}>Контакты</li></Link>
                </ul>
            </nav>
            
        </>
    )
}

export default NavigationPanel;