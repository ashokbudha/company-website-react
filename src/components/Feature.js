

const Feature = (props) =>{
   const {image, title, description} = props.data;

    return (
        <div className="feature" >
                <div className="feature-illustration">
                    <img src={image.src} alt={image.alt}/>
                </div>
                <div className="feature-content">
                    <h1 className="feature-title">{title}</h1>
                    <p className="feature-description">{description}</p>
                    <a href="" className="feature-learn-more-btn btn">Learn More</a>
                </div>
        </div>
    ) 
}

export default Feature;