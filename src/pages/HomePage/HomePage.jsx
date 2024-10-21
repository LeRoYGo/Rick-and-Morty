import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Panel from "../../components/Panel/Panel";

function HomePage() {
    const { pers, location, episode } = useLoaderData();

    return (
        <>
            <Hero />
            <Suspense fallback={<>Загрузка</>}>
                <Await resolve={pers}>
                    <Panel title="Character" isSee All={true} maxCountEl={8} />
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
