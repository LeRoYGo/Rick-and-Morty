/* eslint-disable react/prop-types */
import styles from "./ReadMore.module.css";

function ReadMore({ styleClass }) {
    return <button className={`${styles.btn} ${styleClass}`}>Read More</button>;
}
export default ReadMore;
