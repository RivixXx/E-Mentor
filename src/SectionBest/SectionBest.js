import GreenBtn from "../ReplayComponents/GreenBtn";
import CardBest from "./CardBest";
import "./sectionBest.css";



function SectionBox(props) {
    return (
        <section className="sectionBest">
            <div className="sectionBest__container">
                <div className="sectionBest__row">
                    <div className="row__count">
                        <h2 className="count-title">{props.well}</h2>
                        <p className="count-text"> теоретических и практических <br />курсов для разного уровня</p>
                    </div>
                    <div className="row__count">
                        <h2 className="count-title">{props.material}</h2>
                        <p className="count-text">часов видео-лекций и вебинаров<br /> от лучших преподавателей</p>
                    </div>
                    <div className="row__count">
                        <h2 className="count-title">{props.profession}</h2>
                        <p className="count-text">направлений обучения <br />востребованным профессиям</p>
                    </div>
                    <div className="row__count">
                        <h2 className="count-title">{props.members}</h2>
                        <p className="count-text">учеников уже занимаются<br /> на нашей платформе</p>
                    </div>
                </div>
                <div className="sectionBest__content">
                    <div className="content__left">
                        <h3 className="content__left-title">Учитесь у лучших</h3>
                        <p className="content__left-text">Наши преподаватели – профессионалы, которые добились успеха в своей области. Лид-дизайнеры известных студий, маркетологи крупнейших компаний, редакторы популярных медиа: получайте опыт из первых рук, в любое время.</p>
                        <p className="content__left-text">Кураторы курсов – наши лучшие выпускники, будут помогать <br /> и поддерживать вас на протяжении всего обучения. </p>
                        <GreenBtn name="Все преподователи" />
                    </div>
                    <div className="content__right">
                        <div className="content__right_cards">
                            <CardBest text = "Катя, ведущий дизайнер TailGroup" img = "./img/imgMembers/img_1.png"/>
                            <CardBest text = "Марина, маркетолог Headers Market" img = "./img/imgMembers/img_2.png"/>
                            <CardBest text = "Сава, PR-менеджер Central Media" img = "./img/imgMembers/img_3.png"/>
                            <CardBest text = "Паша, основатель LeadCompany" img = "./img/imgMembers/img_4.png"/>
                            <CardBest text = "Саша, главный редактор Just Journal" img = "./img/imgMembers/img_5.png"/>
                            <CardBest text = "Лёня, ведущий разработчик Ymail" img = "./img/imgMembers/img_6.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionBox;