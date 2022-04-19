import NavigationPanel from "../ReplayComponents/NavigationPanel";

// const colorNav = {color: "#FDFDFD"}

function HeaderP2() {
    return (
        <header className="header" style={{ backgroundColor: "#FDFDFD" }}>
            <div className="header__container" style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="footer__logo">
                    <img src="./img/logotype2.svg" alt="Лого платформы" />
                </div>
                <NavigationPanel color = "#000"/>
            </div>
        </header>
    )
}

export default HeaderP2;