import "./assets/main.css"
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Menu from "../Menu"
import Footer from "../footer";

const Home = () => {

    const localtion = useLocation()
    const navigate = useNavigate()

    document.title = "Home . PXH2910"

    useEffect(() => {
        if (localtion.pathname === "/") {
            navigate("/Games");
        }
    }, [localtion, navigate])

    return (
        <>
            <div className="Home">
                <Menu />
                <div className="content-children">
                    <Outlet />
                </div>

            </div>
            <Footer />
        </>

    )

}

export default Home
