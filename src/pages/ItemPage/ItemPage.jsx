import { useLoaderData, Await } from "react-router-dom";
import CharacterСardV2 from "../../components/CharacterСard/CharacterСardV2";
import LocationsCardV2 from "../../components/LocationsCard/LocationsCardV2";
import EpisodeСardV2 from "../../components/EpisodeСard/EpisodeСardV2";
import { Suspense } from "react";
import Panel from "../../components/Panel/Panel";
import styles from "./ItemPage.module.css";
import CharacterСard from "../../components/CharacterСard/CharacterСard";
import LocationsCard from "../../components/LocationsCard/LocationsCard";
import EpisodeСard from "../../components/EpisodeСard/EpisodeСard";

function ItemPage() {
    const { pers, persAll, category } = useLoaderData();
    return (
        <div>
            <Suspense fallback={<h2>Загрузка</h2>}>
                <Await resolve={pers}>
                    {category === "character" && <CharacterСardV2 />}
                    {category === "location" && <LocationsCardV2 />}
                    {category === "episode" && <EpisodeСardV2 />}
                </Await>
            </Suspense>
            <Suspense fallback={<h2>Загрузка</h2>}>
                <Await resolve={persAll}>
                    {(persAll) => (
                        <Panel title={`${category} All`}>
                            {console.log(persAll)}
                            <ul
                                className={`${styles.list} ${
                                    (category == "location" ||
                                        category == "location") &&
                                    styles.listSmall
                                }`}
                            >
                                {persAll.results.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            {category === "character" && (
                                                <CharacterСard info={item} />
                                            )}
                                            {category === "location" && (
                                                <LocationsCard info={item} />
                                            )}
                                            {category === "episode" && (
                                                <EpisodeСard info={item} />
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </Panel>
                    )}
                </Await>
            </Suspense>
        </div>
    );
}

export default ItemPage;
