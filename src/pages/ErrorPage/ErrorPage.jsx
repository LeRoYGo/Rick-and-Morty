import { useRouteError } from "react-router-dom";
import s from "./ErrorPage.module.css";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className={s["error-page"]}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default ErrorPage;
