import "./MainBtn.css";

function MainBtn(props) {
    return (
        <div className="btn-wrapper">
            <button className="main-btn" type="button">
                {props.name}
            </button>
        </div>
    )
}

export default MainBtn;