import styles from "./Hero.module.css";
import RandM from "/HighLightImage.png";

function Hero() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.hero}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Find out everything in one place.
                    </h1>
                    <p>Characters, locations, episodes and much more.</p>
                    <p className={styles.slogan}>
                        Wubba Lubba Dub Dub! Watch your eyes.
                    </p>
                </div>
                <img src={RandM} alt="" />
            </div>
        </div>
    );
}
export default Hero;
