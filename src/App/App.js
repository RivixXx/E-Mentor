
import "../Css/Reset.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SectionBox from "../SectionBest/SectionBest";
import LearningFormat from "../LearningFormat/LearningFormat";
import PopularCourse from "../PopularCourse/PopularCourse";
import Join from "../Join/Join";
import Footer from "../Footer/Footer";


function App() {
    return (
        <>
            <div className="App">
                <Header />
                <Main />
                <SectionBox well = "100+" material = "3 000" profession = "15" members = "2 000"/>
                <LearningFormat />
                <PopularCourse />
                <Join />
                <Footer />
            </div>
        </>
    );
}

export default App;
