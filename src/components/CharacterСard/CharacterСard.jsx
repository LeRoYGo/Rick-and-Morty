/* eslint-disable react/prop-types */
import "./CharacterСard.css";

function CharacterСard({ info: pers }) {
    return (
        <div className="card">
            {console.log(pers)}
            <img className="img" src={pers.image} alt={pers.name} />
            <h3 className="name">{pers.name}</h3>
            <ul className="properties">
                <li className="status">{pers.status}</li>
                <li className="species">{pers.species}</li>
                <li className="location">{pers.origin.name}</li>
            </ul>
        </div>
    );
}
export default CharacterСard;
