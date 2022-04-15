import "./CardBest.css";

function CardBest(props) {
    return (
        <div className="content__right-card">
            <img src={props.img} alt="Ведущие специалисыт" title = "Ведущий специалист" className="card-img" />
            <p className="card-text">{props.text}</p>
        </div>
    )
}

export default CardBest;