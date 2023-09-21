import Header from "../components/Header";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import FourthSection from "../components/FourthSection";
import FifthSection from "../components/FifthSection";
import SixthSection from "../components/SixthSection";
import SeventhSection from "../components/SeventhSection";
import EigthSection from "../components/EigthSection";
import Footer from "../components/Footer";

//This is the main page of the site which merges all the components
const VeterianAppPage = () => {
  return (
    <div className="app_main_page">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EigthSection />
      <Footer />
    </div>
  );
};

export default VeterianAppPage;
