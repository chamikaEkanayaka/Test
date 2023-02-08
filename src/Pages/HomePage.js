import NavBar from "../Components/NavBar";
import TitleBody from "../Components/TitleBody";
import BodyRibbon1 from "../Components/BodyRibbon1";
import "./HomePageStyles.css";

function HomePage() {
  return (
    <div>
      <NavBar/>
      <TitleBody/>
      <BodyRibbon1/>
      <div class="br2r">increasing exposure.<br/>seamless planning.<br/>amazing event.</div>
      <img class="rpng2" src={require("../Components/rpng2.png")} alt="rpng2"></img>
      <img class="simage" src={require("../Components/simage.png")} alt="simage"></img>
    </div>
  );
}
export default HomePage;
