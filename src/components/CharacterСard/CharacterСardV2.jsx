import { useAsyncValue } from "react-router-dom";
import styles from "./CharacterСardV2.module.css";

function CharacterСardV2() {
    const pers = useAsyncValue();

    return (
        <section className={styles.card}>
            <img className={styles.img} src={pers.image} alt={pers.name} />
            <div className={styles.list}>
                <h3 className={styles.name}>{pers.name}</h3>
                <ul className={styles.properties}>
                    <li className={styles.status}>{pers.status}</li>
                    <li className={styles.species}>{pers.species}</li>
                    <li className={styles.gender}>{pers.gender}</li>
                    <li className={styles.location}>{pers.origin.name}</li>
                </ul>
            </div>
        </section>
    );
}
export default CharacterСardV2;
