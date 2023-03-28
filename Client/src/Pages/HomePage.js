import NavBar from "../Components/Common/NavBar";
import TitleBody from "../Components/HomePage/TitleBody";
import BodyRibbon1 from "../Components/HomePage/BodyRibbon1";
import "../Components/HomePage/HomePageStyles.css";
import FooterRibbon from "../Components/Common/FooterRibbon";


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
