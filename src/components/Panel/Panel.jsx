/* eslint-disable react/prop-types */
import styles from "./Panel.module.css";
import { useAsyncValue } from "react-router-dom";
import CharacterСard from "../CharacterСard/CharacterСard";
import LocationsCard from "../LocationsCard/LocationsCard";
import EpisodeСard from "../EpisodeСard/EpisodeСard";

function Panel({ title, isSeeAll = false, maxCountEl = 100 }) {
    let style = "";
    const items = useAsyncValue();
    const listItems = items.results.map((item, index) => {
        if (index >= maxCountEl) return;
        let component = "";
        switch (title) {
            case "Character":
                component = <CharacterСard info={item} />;
                break;
            case "Locations":
                style = "row-list";
                component = <LocationsCard info={item} />;
                break;
            case "Episodes":
                style = "row-list";
                component = <EpisodeСard info={item} />;
                break;
        }
        return <li key={item.id}>{component}</li>;
    });

    return (
        <section className={styles.wrapper}>
            <div className={styles.row}>
                <h2 className={styles.title}>{title}</h2>
                {isSeeAll ? (
                    <button className={styles["btn"]}>See all</button>
                ) : (
                    ""
                )}
            </div>
            <ul className={`${styles.list} ${styles[style] ?? ""}`}>
                {listItems}
            </ul>
        </section>
    );
}
export default Panel;
