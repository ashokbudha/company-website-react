import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";
import FeatureContainer from "./components/FeatureContainer";
import TeamContainer from "./components/TeamContainer";

const App = () =>{

    return(
        <>
        <Navbar/>
        <HeroSection/>
        <Partners />
        <FeatureContainer/>
        <TeamContainer/>

        <Footer/>
        </>
    );
}

export default App;