import MainBtn from "../ReplayComponents/MainBtn";
import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
    return (
        <main className="Main">
            <div className="main__container">
                <div className="main__left">
                    <div className="main__social">
                        <Link to="#"><img src="./img/icon/facebook.svg" alt="" title="Фейсбук" /></Link>
                        <Link to="https://vk.com/rivix"><img src="./img/icon/vk.svg" alt="" title="Вконтакте" target="_blank" /></Link>
                        <Link to="#"><img src="./img/icon/instagram.svg" alt="" title="Инстаграм" /></Link>
                    </div>
                    <div className="studies__images left-img">
                        <img src="./img/main/1.png" alt="Титульная картинка" title="Фото учебного процесса" />
                    </div>
                </div> 
                <div className="main__middle">
                    <div className="middle__logo">
                        <img src="./img/logotype1.svg" alt="Лого платформы" />
                    </div>
                    <h1 className="main-title">Образовательная онлайн-платформа</h1>
                    <p className="main-text">Курсы и видео-лекции по дизайну, копирайтингу, SMM, таргету и многим другим направлениям</p>
                    <MainBtn name="Все направления" />
                </div> 
                <div className="main__right">
                    <div className="studies__images right-img">
                        <img src="./img/main/2.png" alt="Титульная картинка" title="Фото учебного процесса" />
                    </div>
                    <div className="scroll__down">
                        <Link to="#"><p className="scroll-down">Листайте вниз</p></Link>
                    </div>
                </div> 
            </div>
        </main>
    );
}

export default Main;