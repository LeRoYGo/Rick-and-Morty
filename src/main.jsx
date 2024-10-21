import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import { loaderHome } from "./pages/HomePage/HomePage.loader";
import Layout from "./layout/Layout";
import "./index.css";
import ItemPage from "./pages/ItemPage/ItemPage";
import { loaderItem } from "./pages/ItemPage/ItemPage.loader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
                loader: loaderHome,
            },
            {
                path: ":category/:id",
                element: <ItemPage />,
                loader: loaderItem,
            },

            // Добавить страницы Character, Locations, Episodes
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
