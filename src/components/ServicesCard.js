const ServicesCard = ({info}) =>{
    const {title,price,description,body} = info;
    return(
        <div className="card">
                    <div className="card-content">
                        <h2 className="card-subtitle">{title}</h2>
                        <h1 className="card-title">${price} <span>/month</span></h1>
                        <p className="card-description">
                            {description}
                        </p>
                    </div>
                    <div className="card-body">
                        <ul>
                        { 
                            body.map((item,index)=>{
                                return <li key={index} >{item}</li>
                            })
                        } 
                        </ul>
                    </div>
                    <a href="" className="card-learn-more-btn btn">Learn More</a>
                    
                </div>
    )
}

export default ServicesCard;