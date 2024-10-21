import { defer } from "react-router-dom";
import { getFetchData } from "../../api/api";

export async function loaderItem({ params }) {
    return defer({
        pers: await getFetchData(`${params.category}/${params.id}`),
        persAll: await getFetchData(`${params.category}`),
        category: params.category,
    });
}
