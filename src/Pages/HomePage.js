import NavBar from "../Components/NavBar";
import TitleBody from "../Components/TitleBody";
import BodyRibbon1 from "../Components/BodyRibbon1";
import "./HomePageStyles.css";
import FooterRibbon from "../Components/FooterRibbon";

function HomePage() {
  return (
    <div>
      <NavBar/>
      <TitleBody/>
      <BodyRibbon1/>
      <div class="br2r">increasing exposure.<br/>seamless planning.<br/>amazing event.</div>
      <div class="br3"></div>
      <FooterRibbon/>
    </div>
  );
}
export default HomePage;