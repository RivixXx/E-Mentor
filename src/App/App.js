import "../Css/Reset.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SectionBox from "../SectionBest/SectionBest";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <SectionBox well = "100+" material = "3 000" profession = "15" members = "2 000"/>
        </div>
    );
}

export default App;
