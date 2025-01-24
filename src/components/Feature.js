

const Feature = (props) =>{
   const {image, title, description} = props.data;

    return (
        <div class="feature" id="feature1">
                <div class="feature-illustration">
                    <img src={image.src} alt={image.alt}/>
                </div>
                <div class="feature-content">
                    <h1 class="feature-title">{title}</h1>
                    <p class="feature-description">{description}</p>
                    <a href="" class="feature-learn-more-btn btn">Learn More</a>
                </div>
            </div>
    ) 
}

export default Feature;