export default function Post({avatar, name, location, description}){


    return(
        <div className="post">
            <div className= "avatar">
                <img className="avatar-image"src={avatar}/>
            </div>
            <div className="profile-container">
            
                <div className= "name">
                    <h2>{name}</h2> 
                    <label>{location}</label>
                    <div className = "description">
                    <p className="status">{description}</p>
                </div>
                </div>
            </div>
            
            
        </div>

    );
}