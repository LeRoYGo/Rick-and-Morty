import styles from "./GoHome.module.css";
import { Link } from "react-router-dom";
import upArrow from "../../assets/up-arrow.png";

function GoHome() {
    return (
        <Link to="/" className={styles.toUp}>
            <img src={upArrow} alt="up arrow" />
        </Link>
    );
}
export default GoHome;
