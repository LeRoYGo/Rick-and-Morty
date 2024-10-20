import s from "./Header.module.css";
import Logo from "/logo.svg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className={s["header"]}>
            <Link to={"/"}>
                <img src={Logo} alt="logo" />
            </Link>
        </header>
    );
}
export default Header;
