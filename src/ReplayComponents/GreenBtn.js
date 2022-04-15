import "./GreenBtn.css";

function GreenBtn(props) {
    return (
        <div className="btn-wrapper">
            <button className="green-btn" type="button">
                {props.name}
            </button>
        </div>
    )
}

export default GreenBtn;