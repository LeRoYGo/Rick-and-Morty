/* eslint-disable react/prop-types */
import s from "./Panel.module.css";
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
        <section className={s["wrapper"]}>
            <div className={s["row"]}>
                <h2 className={s["title"]}>{title}</h2>
                {isSeeAll ? <button className={s["btn"]}>See all</button> : ""}
            </div>
            <ul className={`${s["list"]} ${s[style]}`}>{listItems}</ul>
        </section>
    );
}
export default Panel;
