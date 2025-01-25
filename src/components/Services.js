import ServicesCard from "./ServicesCard";

const Services = () =>{

    const servicesInfo = [
        {"title":"Basic", "price":"100", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, illo.", "body":["Lorem ipsum dolor sit.","Lorem ipsum dolor sit.","Lorem ipsum dolor sit.","Lorem ipsum dolor sit."]},
        {"title":"Plus", "price":"250", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, illo.", "body":["Lorem ipsum dolor sit.","Lorem ipsum dolor sit.","Lorem ipsum dolor sit.","Lorem ipsum dolor sit."]},
        {"title":"Pro", "price":"400", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, illo.", "body":["Lorem ipsum dolor sit.","Lorem ipsum dolor sit.","Lorem ipsum dolor sit.","Lorem ipsum dolor sit."]}
    ];
    
    return(
        <section id="services">
        <div className="services-container">
            <div className="services-content">
                <h2 className="services-subtitle">PLANS</h2>
                <h1 className="services-title">Our Services</h1>
                <p className="services-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>

            </div>
            <div className="services-cards">
                {
                    servicesInfo.map((item,index)=>{
                        return <ServicesCard key={index} info={item}/>

                    })
                }
                
                {/* <ServicesCard/> */}
                

            </div>


        </div>
    </section> 
    )
}

export default Services;