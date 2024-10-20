/* eslint-disable react/prop-types */
import s from "./LocationsCard.module.css";
import Planet from "../../assets/planet.svg";
import ReadMore from "../ReadMore/ReadMore";
import { Link } from "react-router-dom";

function LocationsCard({ info: planet }) {
    return (
        <div className={s["card"]}>
            <img className={s["img"]} src={Planet} alt="Planet" />
            <h3 className={s["type"]}>{planet.type}</h3>
            <span className={s["name"]}>{planet.name}</span>
            <Link to={planet.url}>
                <ReadMore />
            </Link>
        </div>
    );
}
export default LocationsCard;
