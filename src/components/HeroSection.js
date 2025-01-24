import HeroBanner from "../assets/images/hero-banner.png";
const HeroSection = () =>{

    return(
        <section id="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h2 className="hero-subtitle">WELCOME</h2>
                    <h1 className="hero-title">Lorem ipsum dolor sit amet consectetur.</h1>
                    <p className="hero-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, corrupti. Lorem ipsum dolor, sit
                        amet consectetur adipisicing elit. Impedit, earum? </p>
                    <a href="" className="hero-explore-btn">Explore</a>
                </div>
                <div className="hero-banner">
                    <img src={HeroBanner} alt="hero-banner"/>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;