import { defer } from "react-router-dom";
import { getFetchData } from "../../api/api";

export async function loaderHome() {
    return defer({
        pers: await getFetchData("character"),
        location: await getFetchData("location"),
        episode: await getFetchData("episode"),
    });
}
