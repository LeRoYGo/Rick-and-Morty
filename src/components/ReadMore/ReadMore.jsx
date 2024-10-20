/* eslint-disable react/prop-types */
import s from "./ReadMore.module.css";
import icon from "../../assets/Read-More.svg";

function ReadMore({ styleClass }) {
    return (
        <button className={`${s["btn"]} ${styleClass}`}>
            <img className={s["icon"]} src={icon} alt="Read More" />
            <span className={s["text"]}>Read More</span>
        </button>
    );
}
export default ReadMore;
