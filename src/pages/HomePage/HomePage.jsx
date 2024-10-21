import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Panel from "../../components/Panel/Panel";
import LocationsCard from "../../components/LocationsCard/LocationsCard";
import EpisodeСard from "../../components/EpisodeСard/EpisodeСard";
import CharacterСard from "../../components/CharacterСard/CharacterСard";
import styles from "./HomePage.module.css";

function HomePage() {
    const { pers, location, episode } = useLoaderData();

    return (
        <>
            <Hero />
            <Suspense fallback={<h2>Загрузка</h2>}>
                <Await resolve={pers}>
                    {(pers) => (
                        <Panel
                            title="Character"
                            isSeeAll={true}
                            path="/character/1"
                        >
                            <ul className={styles.list}>
                                {pers.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <CharacterСard info={item} />
                                        </li>
                                    );
                                })}
                            </ul>
                        </Panel>
                    )}
                </Await>
            </Suspense>
            <Suspense fallback={<h2>Загрузка</h2>}>
                <Await resolve={location}>
                    {(location) => (
                        <Panel
                            title="Locations"
                            isSeeAll={true}
                            path="/location/1"
                        >
                            <ul className={styles.rowList}>
                                {location.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <LocationsCard info={item} />
                                        </li>
                                    );
                                })}
                            </ul>
                        </Panel>
                    )}
                </Await>
            </Suspense>
            <Suspense fallback={<h2>Загрузка</h2>}>
                <Await resolve={episode}>
                    {(episode) => (
                        <Panel
                            title="Episodes"
                            isSeeAll={true}
                            path="/episode/1"
                        >
                            {console.log(episode)}
                            <ul className={styles.rowList}>
                                {episode.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <EpisodeСard info={item} />
                                        </li>
                                    );
                                })}
                            </ul>
                        </Panel>
                    )}
                </Await>
            </Suspense>
        </>
    );
}

export default HomePage;
