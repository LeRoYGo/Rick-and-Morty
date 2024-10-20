/* eslint-disable react-refresh/only-export-components */
import { defer, useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import Hero from "../components/Hero/Hero";
import Panel from "../components/Panel/Panel";

export async function loaderHome() {
    return defer({
        pers: await loader("character"),
        location: await loader("location"),
        episode: await loader("episode"),
    });
}

async function loader(url) {
    const response = await fetch(`https://rickandmortyapi.com/api/${url}`);
    return response.json();
}

function HomePage() {
    const { pers, location, episode } = useLoaderData();

    return (
        <>
            <Hero />
            <Suspense fallback={<>Загрузка</>}>
                <Await resolve={pers}>
                    <Panel title="Character" isSeeAll={true} maxCountEl={8} />
                </Await>
            </Suspense>
            <Suspense fallback={<>Загрузка</>}>
                <Await resolve={location}>
                    <Panel title="Locations" isSeeAll={true} maxCountEl={7} />
                </Await>
            </Suspense>
            <Suspense fallback={<>Загрузка</>}>
                <Await resolve={episode}>
                    <Panel title="Episodes" isSeeAll={true} maxCountEl={4} />
                </Await>
            </Suspense>
        </>
    );
}

export default HomePage;
