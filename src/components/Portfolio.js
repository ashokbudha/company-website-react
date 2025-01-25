import project1 from "../assets/images/projects/project1.png";
import project2 from "../assets/images/projects/project2.png";
import project3 from "../assets/images/projects/project3.png";
import project4 from "../assets/images/projects/project4.png";
import project5 from "../assets/images/projects/project5.png";
import project6 from "../assets/images/projects/project6.png";
import project7 from "../assets/images/projects/project7.png";
import project8 from "../assets/images/projects/project8.png";


const Portfolio = () =>{
    const projectInfo=[
        {"src":project1, "alt": "project 1"},
        {"src":project2, "alt": "project 2"},
        {"src":project3, "alt": "project 3"},
        {"src":project4, "alt": "project 4"},
        {"src":project5, "alt": "project 5"},
        {"src":project6, "alt": "project 6"},
        {"src":project7, "alt": "project 7"},
        {"src":project8, "alt": "project 8"}
    ]


    return(  
        <section id="portfolio">
            <div className="portfolio-container">
                <div className="portfolio-content">
                    <h2 className="portfolio-subtitle">WORKS</h2>
                    <h1 className="portfolio-title">Portfolio</h1>
                    <p className="portfolio-description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                </div>
                <div className="portfolio-projects">
                    {
                    projectInfo.map((item,index)=>{
                        return(
                        <div className="project" key={index}>
                            <img src={item.src} alt={item.alt}/>
                        </div>
                        );
                    })
                    }
                    
                    

                </div>

                <a href="" className="portfolio-learn-more-btn btn">Learn More</a>

            </div>
        </section>);
}

export default Portfolio;