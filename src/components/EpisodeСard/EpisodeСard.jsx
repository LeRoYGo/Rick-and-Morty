/* eslint-disable react/prop-types */
import styles from "./EpisodeСard.module.css";
import Play from "../../assets/play.svg";
import ReadMore from "../ReadMore/ReadMore";
import { Link } from "react-router-dom";

function EpisodeСard({ info: episode }) {
    const scrollTop = () => {
        window.scrollTo(pageYOffset, 0);
    };
    return (
        <div className={styles.card}>
            <img className={styles.img} src={Play} alt="Play" />
            <span className={styles.episode}>
                {`${episode.name} | ${episode.episode}`}
            </span>
            <Link
                to={`/episode/${episode.id}`}
                className={styles.readMore}
                onClick={scrollTop}
            >
                <ReadMore />
            </Link>
            <span className={styles.div4}>&#9825;</span>
        </div>
    );
}
export default EpisodeСard;
