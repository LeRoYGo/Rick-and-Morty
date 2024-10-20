import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";

function Layout() {
    return (
        <>
            <Hero />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
