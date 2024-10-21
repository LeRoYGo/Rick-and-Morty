import { useAsyncValue } from "react-router-dom";
import styles from "./EpisodeСardV2.module.css";
import img from "../../assets/play.svg";
import GoHome from "../GoHome/GoHome";

function EpisodeСardV2() {
    const item = useAsyncValue();
    return (
        <section className={styles.wrapper}>
            <GoHome />
            <div className={styles.card}>
                <img className={styles.img} src={img} alt="play" />
                <h3 className={styles.name}>{item.name}</h3>
                <ul className={styles.properties}>
                    <li className={styles.air_date}>{item.air_date}</li>
                    <li className={styles.dimension}>{item.episode}</li>
                </ul>
            </div>
        </section>
    );
}
export default EpisodeСardV2;
