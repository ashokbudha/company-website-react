

const TeamMember = (props) =>{
    const {image,name, role} = props.info;

    return(
        <div className="team-member">
                    <img src={image.src} alt={image.alt}/>
                    <h3 className="team-member-name">{name}</h3>
                    <p className="team-member-role">{role}</p>
        </div>
    );
}

export default TeamMember;