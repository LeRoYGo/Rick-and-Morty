/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ReadMore from "../ReadMore/ReadMore";
import s from "./CharacterСard.module.css";

function CharacterСard({ info: pers }) {
    return (
        <div className={s["card"]}>
            <img className={s["img"]} src={pers.image} alt={pers.name} />
            <h3 className={s["name"]}>{pers.name}</h3>
            <ul className={s["properties"]}>
                <li className={s["status"]}>{pers.status}</li>
                <li className={s["species"]}>{pers.species}</li>
                <li className={s["location"]}>{pers.origin.name}</li>
            </ul>
            <Link to={pers.url} className={s["read-more"]}>
                <ReadMore />
            </Link>
        </div>
    );
}
export default CharacterСard;
