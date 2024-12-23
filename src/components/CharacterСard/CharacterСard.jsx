/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ReadMore from "../ReadMore/ReadMore";
import styles from "./CharacterСard.module.css";

function CharacterСard({ info: pers }) {
    const scrollTop = () => {
        window.scrollTo(pageYOffset, 0);
    };
    return (
        <div className={styles.card}>
            <img className={styles.img} src={pers.image} alt={pers.name} />
            <h3 className={styles.name}>{pers.name}</h3>
            <ul className={styles.properties}>
                <li className={styles.status}>{pers.status}</li>
                <li className={styles.species}>{pers.species}</li>
                <li className={styles.location}>{pers.origin.name}</li>
            </ul>
            <Link
                to={`/character/${pers.id}`}
                className={styles.readMore}
                onClick={scrollTop}
            >
                <ReadMore />
            </Link>
        </div>
    );
}
export default CharacterСard;
