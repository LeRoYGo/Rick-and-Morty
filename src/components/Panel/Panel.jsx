/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Panel.module.css";

function Panel({ title, isSeeAll = false, children, path }) {
    const scrollTop = () => {
        window.scrollTo(pageYOffset, 0);
    };
    return (
        <section className={styles.wrapper}>
            <div className={styles.row}>
                <h2 className={styles.title}>{title}</h2>
                {isSeeAll && (
                    <Link to={path} className={styles.btn} onClick={scrollTop}>
                        See all
                    </Link>
                )}
            </div>
            {children}
        </section>
    );
}
export default Panel;
