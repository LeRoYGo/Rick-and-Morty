/* eslint-disable react/prop-types */
import s from "./ReadMore.module.css";

function ReadMore({ styleClass }) {
    return <button className={`${s["btn"]} ${styleClass}`}>Read More</button>;
}
export default ReadMore;
