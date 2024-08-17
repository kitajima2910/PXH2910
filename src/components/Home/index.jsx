import "./assets/main.css"
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Menu from "../Menu"
import { useEffect } from "react";

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
        <div className="Home">
            <Menu />
            <div className="content-children">
                <Outlet />
            </div>
        </div>
    )

}

export default Home
