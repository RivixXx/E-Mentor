import "../Css/Reset.css";
import HeaderP2 from "../Header/HeaderP2";
import NavigationRow from "../ReplayComponents/NavigationRow";
import PageCourseMD from "../page2CourseMD/PageCourseMD";
import PageInfo from "../page2Info/PageInfo";
import PageCurrentKnowledge from "../Page2CurrentKnowledge/PageCurrentKnowledge"; 
import PageSkills from "../page2Skills/PageSkills";

function AppPage2() {
    return (
        <div className="AppPage2">
           <HeaderP2 />
           <NavigationRow bgOpacity = "0.5"/>
           <PageCourseMD />
           <PageInfo well = "8" material = "24" profession = "7" members = "4"/>
           <PageCurrentKnowledge />
           <PageSkills />
        </div>
    );
}

export default AppPage2;