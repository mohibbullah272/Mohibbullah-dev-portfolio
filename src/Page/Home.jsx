import AboutME from "../components/AboutME";
import Banner from "../components/Banner";
import ContactSection from "../components/Contact";
import Footer from "../components/Footer";
import MyProject from "../components/MyProject";
import MySkills from "../components/MySkills";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
           <AboutME></AboutME>
           <MySkills></MySkills>
           <MyProject></MyProject>
           <ContactSection></ContactSection>
        </div>
    );
};

export default Home;