import MainBtn from "../ReplayComponents/MainBtn";
import "./PageCurrentKnowledge.css";

function PageCurrentKnowledge() {
    return (
        <section className="Knowledge" style={{ backgroundColor: "#10B582", alignItems: "center" }}>
            <div className="Knowledge__container" style={{ display: "flex", padding: "150px 0 120px 0" }}>
                <div className="Knowledge__right" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start",  flex: "1 1 50%" }}>
                    <h1 className="Knowledge-title">Актуальные знания</h1>
                    <p className="Knowledge-text">Мы понимаем, как быстро меняются тренды и появляются обновления. Поэтому мы всегда следим за всеми новинками, добавляем в программу то, что требуют топовые компании. Мы предлагаем вам только актуальные знания, чтобы вы были впереди планеты всей. </p>
                    <MainBtn name="Купить курс"/>
                </div>
                <div className="Knowledge__left" style={{ flex: "1 1 50%" }}>
                    <div className="Knowledge__image">
                        <img src="./img/page2/Knowledge/knowledgePhoto.png" alt="Титульная картинка" title="Фото учебного процесса" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageCurrentKnowledge;