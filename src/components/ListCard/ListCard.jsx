/* eslint-disable react/prop-types */
import "./ListCard.css";
import { useAsyncValue } from "react-router-dom";
import CharacterСard from "../CharacterСard/CharacterСard";
import LocationsCard from "../LocationsCard/LocationsCard";

export async function loader(url) {
    const res = await fetch(url);
    return res.json();
}
function ListCard({ maxEl, type }) {
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
        }
    });

    return <ul className="list">{listItems}</ul>;
}
export default ListCard;
