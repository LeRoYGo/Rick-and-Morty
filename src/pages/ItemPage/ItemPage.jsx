import { useLoaderData, Await } from "react-router-dom";
import CharacterСardV2 from "../../components/CharacterСard/CharacterСardV2";
import { Suspense } from "react";
import Panel from "../../components/Panel/Panel";
import CharacterСard from "../../components/CharacterСard/CharacterСard";
import styles from "./ItemPage.module.css";

function ItemPage() {
    const { pers, persAll } = useLoaderData();
    return (
        <div>
            <Suspense fallback={<h2>Загрузка</h2>}>
                <Await resolve={pers}>
                    <CharacterСardV2 />
                </Await>
            </Suspense>
            <Suspense fallback={<h2>Загрузка</h2>}>
                <Await resolve={persAll}>
                    {(persAll) => (
                        <Panel title="Character All">
                            {console.log(persAll)}
                            <ul className={styles.list}>
                                {persAll.results.map((item) => {
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
        </div>
    );
}

export default ItemPage;
