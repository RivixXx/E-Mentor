// import MainBtn from "../ReplayComponents/MainBtn";
import MainBtn from "../ReplayComponents/MainBtn";
import "./LearningFormat.css";

function LearningFormat() {
    return (
        <section className="learning" style={{ backgroundColor: "#10B582", alignItems: "center" }}>
            <div className="learning__container" style={{ display: "flex", padding: "150px 0 120px 0" }}>
                <div className="learning__left" style={{ flex: "1 1 50%" }}>
                    <div className="learning__image">
                        <img src="./img/Learning/learning-photo.png" alt="Титульная картинка" title="Фото учебного процесса" />
                    </div>
                </div>
                <div className="learning__right" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start",  flex: "1 1 50%" }}>
                    <h1 className="learning-title">Выбирайте свой формат обучения</h1>
                    <p className="learning-text">Смотрите видео-лекции в удобное для вас время, обучайтесь на тренажере, участвуйте в интенсивных воркшопах с командой или проходите курс с гибким расписанием. На нашей платформе каждый найдет подходящий формат.</p>
                    <MainBtn name="Все курсы"/>
                </div>
            </div>
        </section>
    )
}

export default LearningFormat;