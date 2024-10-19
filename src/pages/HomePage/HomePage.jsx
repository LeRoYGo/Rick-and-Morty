/* eslint-disable react/no-children-prop */
import { defer, useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import ListCard, {
    loader as loaderCharacter,
    loader as loaderLocation,
} from "../../components/ListCard/ListCard";
import CharacterСard from "../../components/CharacterСard/CharacterСard";
import LocationsCard from "../../components/LocationsCard/LocationsCard";

export async function loader() {
    return defer({
        pers: await loaderCharacter(
            "https://rickandmortyapi.com/api/character"
        ),
        location: await loaderLocation(
            "https://rickandmortyapi.com/api/location"
        ),
    });
}

function HomePage() {
    const { pers, location } = useLoaderData();
    return (
        <>
            <Suspense fallback={<>Загрузка</>}>
                <Await resolve={pers}>
                    <section className="character">
                        <div className="row">
                            <h2 className="title">Character</h2>
                            <button>See all</button>
                        </div>
                        <ListCard maxEl={8}>
                            <CharacterСard />
                        </ListCard>
                    </section>
                </Await>
            </Suspense>
            <Suspense fallback={<>Загрузка</>}>
                <Await resolve={location}>
                    <section className="character">
                        <div className="row">
                            <h2 className="title">Locations</h2>
                            <button>See all</button>
                        </div>
                        <ListCard maxEl={4}>
                            <LocationsCard />
                        </ListCard>
                    </section>
                </Await>
            </Suspense>
        </>
    );
}

export default HomePage;
