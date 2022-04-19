const cardText = {
    fontFamily: 'Raleway',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "100%",
    color: "#353A5A",
};

function CourseCard(props) {
    return (
        <> 
            <div className="card__box" style={{ display: "flex", flexDirection: "column", }}>
                <img src={props.img} alt="Фото курса" title="Лого курса" className="card-img" />
                <p className="card-text" style={cardText}>{props.text}</p>
            </div>
        </>
    )
}

export default CourseCard;