/* eslint-disable react/prop-types */
import s from "./EpisodeСard.module.css";
import Play from "../../assets/play.svg";
import ReadMore from "../ReadMore/ReadMore";
import { Link } from "react-router-dom";

function EpisodeСard({ info: episode }) {
    return (
        <div className={s["card"]}>
            <img className={s["img"]} src={Play} alt="Play" />
            <span className={s["episode"]}>
                {`${episode.name} | ${episode.episode}`}
            </span>
            <Link to={episode.url} className={s["read-more"]}>
                <ReadMore />
            </Link>
            <span className={s["div4"]}>&#9825;</span>
        </div>
    );
}
export default EpisodeСard;
