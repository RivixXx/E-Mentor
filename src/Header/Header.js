import "./header.css";
import NavigationPanel from "../ReplayComponents/NavigationPanel";

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <NavigationPanel color = "#FDFDFD"/>
            </div>
        </header>
    );
}

export default Header;