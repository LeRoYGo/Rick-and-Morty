import s from "./Hero.module.css";
import Logo from "../../../public/logo.svg";
import RandM from "../../../public/HighLightImage.png";

function Hero() {
    return (
        <header className={s["header"]}>
            <div>
                <img src={Logo} alt="" />
                <h1 className={s["title"]}>
                    Find out everything in one place.
                </h1>
                <p>Characters, locations, episodes and much more.</p>
                <p className={s["slogan"]}>
                    Wubba Lubba Dub Dub! Watch your eyes.
                </p>
            </div>
            <img src={RandM} alt="" />
        </header>
    );
}
export default Hero;
