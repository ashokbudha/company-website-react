import partner1 from "../assets/images/partner1.png";
import partner2 from "../assets/images/partner2.png";
import partner3 from "../assets/images/partner3.png";
import partner4 from "../assets/images/partner4.png";
import partner5 from "../assets/images/partner5.png";


const Partners = () =>{
    
    const imageData = [
        {"src":partner1,"alt":"Google"},
        {"src":partner2, "alt":"microsoft"},
        {"src":partner3, "alt":"airbnb"},
        {"src":partner4, "alt":"facebook"},
        {"src":partner5, "alt":"spotify"}
    ];

    return (
        <section id="partners">
            <div className="partners-container">
                <div className="partners-content">
                    <h2 className="partners-subtitle">PARTNERS</h2>
                    <h1 className="partners-title">Lorem ipsum dolor</h1>
                    <p className="partners-description">Lorem ipsum dolor sit amet consectetur elit adipisicing elit lorem. </p>
                </div>
                <div className="partners-logo">
                    {
                        imageData.map((image, index)=>{
                           return (<img key={index} src={image.src} alt={image.alt}/>);
                        })
                    }
                </div>
                <a href="" className="partner-learn-more-btn btn">Learn More</a>
            </div>
        </section>
    )
}

export default Partners;