import { useAsyncValue } from "react-router-dom";
import styles from "./LocationsCardV2.module.css";
import Planet from "../../assets/planet.svg";
import GoHome from "../GoHome/GoHome";

function LocationsCardV2() {
    const item = useAsyncValue();

    return (
        <section className={styles.wrapper}>
            <GoHome />
            <div className={styles.card}>
                <img className={styles.img} src={Planet} alt="Planet" />
                <h3 className={styles.name}>{item.name}</h3>
                <div className={styles.list}>
                    <ul className={styles.properties}>
                        <li className={styles.type}>{item.type}</li>
                        <li className={styles.dimension}>{item.dimension}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
export default LocationsCardV2;
