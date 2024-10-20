/* eslint-disable react/prop-types */
import styles from "./LocationsCard.module.css";
import Planet from "../../assets/planet.svg";
import ReadMore from "../ReadMore/ReadMore";
import { Link } from "react-router-dom";

function LocationsCard({ info: planet }) {
    return (
        <div className={styles.card}>
            <img className={styles.img} src={Planet} alt="Planet" />
            <h3 className={styles.type}>{planet.type}</h3>
            <span className={styles.name}>{planet.name}</span>
            <Link to={planet.url}>
                <ReadMore />
            </Link>
        </div>
    );
}
export default LocationsCard;
