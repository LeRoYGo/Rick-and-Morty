import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage, { loader as loaderHome } from "./pages/HomePage/HomePage";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        loader: loaderHome,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        path: "location",
                        element: <>location</>,
                    },
                    {
                        path: "episodes",
                    },
                    {
                        path: "character",
                    },
                ],
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
