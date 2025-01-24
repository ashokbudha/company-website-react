import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";
import FeatureContainer from "./components/FeatureContainer";

const App = () =>{

    return(
        <>
        <Navbar/>
        <HeroSection/>
        <Partners />
        <FeatureContainer/>
        <Footer/>
        </>
    );
}

export default App;