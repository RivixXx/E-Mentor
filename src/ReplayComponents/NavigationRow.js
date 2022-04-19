import "./NavigationRow.css";
import { Link } from "react-router-dom";

function NavigationRow(props) {
    return (
        <section className="navigation">
            <div className="navigation__container" >
                
                <h4 className="navigation-title" >
                    <Link to="/App">Главная</Link>
                    <span className="navigationArrow"></span>
                </h4>
                <h4 className="navigation-title" >
                    <Link to="/">Курсы</Link>
                    <span className="navigationArrow"></span>
                </h4>
                <h4 className="navigation-title" style={{ opacity: props.bgOpacity }} ><Link to="#">Motion design</Link></h4>
            </div>
        </section>
    )
}

export default NavigationRow;