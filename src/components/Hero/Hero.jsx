import s from "./Hero.module.css";
import RandM from "/HighLightImage.png";

function Hero() {
    return (
        <div className={s["wrapper"]}>
            <div className={s["hero"]}>
                <div className={s["content"]}>
                    <h1 className={s["title"]}>
                        Find out everything in one place.
                    </h1>
                    <p>Characters, locations, episodes and much more.</p>
                    <p className={s["slogan"]}>
                        Wubba Lubba Dub Dub! Watch your eyes.
                    </p>
                </div>
                <img src={RandM} alt="" />
            </div>
        </div>
    );
}
export default Hero;
