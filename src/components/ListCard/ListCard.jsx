/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import s from "./ListCard.module.css";
import { useAsyncValue } from "react-router-dom";
import CharacterСard from "../CharacterСard/CharacterСard";
import LocationsCard from "../LocationsCard/LocationsCard";
import EpisodeСard from "../EpisodeСard/EpisodeСard";

export async function loader(url) {
    const res = await fetch(url);
    return res.json();
}
function ListCard({ maxEl, type, style = "" }) {
    const items = useAsyncValue();

    const listItems = items.results.map((item, index) => {
        if (index >= maxEl) return;

        switch (type) {
            case "char":
                return (
                    <li key={item.id}>
                        <CharacterСard info={item} />
                    </li>
                );
            case "location":
                return (
                    <li key={item.id}>
                        <LocationsCard info={item} />
                    </li>
                );
            case "episodes":
                return (
                    <li key={item.id}>
                        <EpisodeСard info={item} />
                    </li>
                );
        }
    });

    return <ul className={`${s["list"]} ${s[style]}`}>{listItems}</ul>;
}
export default ListCard;
