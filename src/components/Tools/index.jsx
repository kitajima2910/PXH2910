import "./assets/main.css"
import { useEffect } from "react"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"

const Tools = () => {

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname === "/Tools/Get-YouTube-Video-Thumbnail-Image") {
            navigate("/Tools/Get-YouTube-Video-Thumbnail-Image");
        } else {
            document.title = "Tools . PXH2910"
        }
    }, [location.pathname, navigate])

    return (
        <div className="Tools">

            {location.pathname === "/Tools" && <div className="list-pages-demo">
                <Link to="/Tools/Get-YouTube-Video-Thumbnail-Image">Get YouTube Video Thumbnail Image</Link>
            </div>}
            <div className="content-children">
                <Outlet />
            </div>

        </div>
    )
}

export default Tools
