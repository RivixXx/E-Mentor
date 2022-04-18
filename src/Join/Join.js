import MainBtn from "../ReplayComponents/MainBtn";

const joinTitle = {
    fontFamily: 'Raleway',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "58px",
    lineHeight: "120%",
    textAlign: "left",
    color: "#353A5A",
    marginTop: "-30px",
}

const joinText = {
    fontFamily: 'Raleway',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "150%",
    textAlign: "left",
    color: "#353A5A",
    width: "478px",
    paddingTop: "20px",
    paddingBottom: "50px",
}

function Join() {
    return (
        <section className="join" style={{maxWidth: "1920px", margin: "0 auto", backgroundImage: "url(./img/Join/BG_join.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", marginBottom: "120px"}}>
            <div className="join__container" style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="join-content" style={{ width: "50%", padding: "120px 0"}}>
                    <h1 className="join-title" style={joinTitle}>Присоединяйтесь к E-Mentor сейчас</h1>
                    <p className="join-text" style={joinText}>Выберите подходящий тариф и формат обучения, пройдите 2 урока и мы подарим вам дополнительные лекции по любому направлению бесплатно!</p>
                    <MainBtn name="Выбрать тариф"/>
                </div>
            </div>
        </section>
    )
}

export default Join;