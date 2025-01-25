import Feature from "./Feature";

import feature1_illustration from "../assets/images/feature1-illustration.png";
import feature2_illustration from "../assets/images/feature2-illustration.png";


const FeatureContainer = () =>{
    const feature1 ={"image":{"src":feature1_illustration, "alt":"feature1 -illustration"}, "title":"Lorem ipsum dolor sit amet consectetur.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,excepturi odit itaque magnam repudiandae, reprehenderit quas officia debitis minus aliquaz dolore deleniti reiciendis tenetur molestias distinctio!"};

    const feature2 ={"image":{"src":feature2_illustration, "alt":"feature2 -illustration"}, "title":"Lorem ipsum dolor sit amet consectetur.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,excepturi odit itaque magnam repudiandae, reprehenderit quas officia debitis minus aliquaz dolore deleniti reiciendis tenetur molestias distinctio!"};

    

    return(    
    <section id="features">
<<<<<<< HEAD
        <div className="features-container">
=======
        <div class="features-container">
>>>>>>> 99bc87874e39443345398f47654adbc2bf5f0bc0
            <Feature data ={feature1}/>
            <Feature data ={feature2}/>
        </div>
    </section>

    )
}

export default FeatureContainer;