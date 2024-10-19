/* eslint-disable react/prop-types */
import s from "./LocationsCard.module.css";
import Planet from "../../assets/planet.svg";

function LocationsCard({ info: planet }) {
    return (
        <div className={s["card"]}>
            <img src={Planet} alt="Planet" />
            <h3 className="type">{planet.type}</h3>
            <span className="name">{planet.name}</span>
            <span className="dimension">{planet.dimension}</span>
        </div>
    );
}
export default LocationsCard;
