
import "./Card.css";
function Card({name,age,city,image,profession})
{
    return(
        
        <div className="card">
            <img src={image} alt="profile" className="card-img"/>
            <h4>Name :<span>{name}</span></h4>
            <p>Age :<span>{age}</span></p>
            <p>Profession :<span>{profession}</span></p>
            <p>City :<span>{city}</span></p>

            </div>
    );
}
export default Card;