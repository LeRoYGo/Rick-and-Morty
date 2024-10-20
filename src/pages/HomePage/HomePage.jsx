/* eslint-disable react-refresh/only-export-components */
import { defer, useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import ListCard, {
    loader as loaderCharacter,
    loader as loaderLocation,
    loader as loaderEpisode,
} from "../../components/ListCard/ListCard";
import s from "./HomePage.module.css";

export async function loaderHome() {
    return defer({
        pers: await loaderCharacter(
            "https://rickandmortyapi.com/api/character"
        ),
        location: await loaderLocation(
            "https://rickandmortyapi.com/api/location"
        ),
        episode: await loaderEpisode("https://rickandmortyapi.com/api/episode"),
    });
}

function HomePage() {
    const { pers, location, episode } = useLoaderData();

    return (
        <main className={s["main"]}>
            <Suspense fallback={<>Загрузка</>}>
                <Await resolve={pers}>
                    <section className={s["wrapper"]}>
                        <div className={s["row"]}>
                            <h2 className={s["title"]}>Character</h2>
                            <button className={s["btn"]}>See all</button>
                        </div>
                        <ListCard maxEl={8} type={"char"} />
                    </section>
                </Await>
            </Suspense>
            <Suspense fallback={<>Загрузка</>}>
                <Await resolve={location}>
                    <section className={s["wrapper"]}>
                        <div className={s["row"]}>
                            <h2 className={s["title"]}>Locations</h2>
                            <button className={s["btn"]}>See all</button>
                        </div>
                        <ListCard maxEl={7} type={"location"} style="row" />
                    </section>
                </Await>
            </Suspense>
            <Suspense fallback={<>Загрузка</>}>
                <Await resolve={episode}>
                    <section className={s["wrapper"]}>
                        <div className={s["row"]}>
                            <h2 className={s["title"]}>Episodes</h2>
                            <button className={s["btn"]}>See all</button>
                        </div>
                        <ListCard maxEl={5} type={"episodes"} style="row" />
                    </section>
                </Await>
            </Suspense>
        </main>
    );
}

export default HomePage;
