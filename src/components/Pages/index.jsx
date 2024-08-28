import "./assets/main.css"
import { useEffect } from "react"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"

const Pages = () => {

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname === "/Pages/Gallery") {
            navigate("/Pages/Gallery");
        } else {
            document.title = "Pages . PXH2910"
        }
    }, [location.pathname, navigate])

    return (
        <div className="Pages">

            {location.pathname === "/Pages" && <div className="list-pages-demo">
                <Link to="/Pages/Gallery">Gallery</Link>
            </div>}
            <div className="content-children">
                <Outlet />
            </div>
            
        </div>
    )

}

export default Pages
