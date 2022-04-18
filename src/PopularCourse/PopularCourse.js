import GreenBtn from "../ReplayComponents/GreenBtn";
import CourseCard from "../PopularCourse/CourseCard";

const courseTitle = {
    fontFamily: 'Raleway',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "58px",
    lineHeight: "100%",
    textAlign: "center",
    color: "#353A5A",
    paddingTop: "120px",
    paddingBottom: "60px"
}

function PopularCourse() {
    return (
        <section className="course">
            <div className="course__container" style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "120px" }}>
                <h2 className="course-title" style={courseTitle}>Популярные курсы</h2>
                <div className="course__card-content" style={{width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "30px", paddingBottom: "60px"}}>
                    <CourseCard text = "Motion design" img = "./img/Course/MD.png" link = "#"/>
                    <CourseCard text = "Таргет в Instagram" img = "./img/Course/TLG.png" link = "#"/>
                    <CourseCard text = "Эффектные презентации" img = "./img/Course/Presentation.png" link = "#"/>
                    <CourseCard text = "SMM-стратегия" img = "./img/Course/SMM.png" link = "#"/>
                </div>
                <GreenBtn name="Все курсы"/>
            </div>
        </section>
    )
}

export default PopularCourse;