import { defer } from "react-router-dom";
import { getFetchData } from "../../api/api";

export async function loaderHome() {
    return defer({
        pers: await getFetchData("character/1,2,3,4,5,6,7,8"),
        location: await getFetchData("location/1,2,3,4,5,6,7"),
        episode: await getFetchData("episode/1,2,3,4"),
    });
}
