import styles from "./Footer.module.css";
import Logo from "/logo.svg";
import { Link } from "react-router-dom";
import upArrow from "../../assets/up-arrow.png";

function Footer() {
    const scrollTop = () => {
        window.scrollTo(pageYOffset, 0);
    };

    return (
        <footer className={styles.footer}>
            <Link to="/">
                <img className={styles.logo} src={Logo} alt="logo" />
            </Link>
            <button className={styles.toUp} onClick={scrollTop}>
                <img src={upArrow} alt="up arrow" />
            </button>
        </footer>
    );
}
export default Footer;
