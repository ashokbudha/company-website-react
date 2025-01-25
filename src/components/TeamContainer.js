import TeamMember from "./TeamMember";

import member1 from "../assets/images/member1.png";
import member2 from "../assets/images/member2.png";
import member3 from "../assets/images/member3.png";
import member4 from "../assets/images/member4.png";

const TeamContainer = () =>{
    const MemberInfo = [{"image":{"src":member1, "alt":"Member 1"}, "name":"Peg Lages", "role":"CEO"},
        {"image":{"src":member2, "alt":"Member 2"}, "name":"Richard Guerra", "role":"CTO"},
        {"image":{"src":member3, "alt":"Member 3"}, "name":"Alexandra Stolz", "role":"DESIGNER"},
        {"image":{"src":member4, "alt":"Member 4"}, "name":"Janet Brey", "role":"DEVELOER"}];

    return(
        <section id="team">
        <div className="team-container">
            <div className="team-content">
                <h2 className="team-subtitle">TEAM</h2>
                <h1 className="team-title">Our Talents</h1>
                <p className="team-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
                    corrupti quam!</p>

            </div>
            <div className="team-members">
                  {
                      MemberInfo.map((item,index) => {
                        return <TeamMember key={index} info={item} /> 
                     
                   }) 
                   }           
            </div>
            <a href="" className="team-view-team-btn btn">View Team</a>
        </div>
    </section>
    );
}

export default TeamContainer;