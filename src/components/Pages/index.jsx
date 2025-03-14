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

        const links = document.querySelectorAll(".Pages .list-pages-demo a");
        links.forEach(link => {
            const color = getRandomColor();
            link.style.color = color;
            link.style.border = `2px dashed ${color}`;
        });

    }, [location.pathname, navigate])

    const getRandomColor = () => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let a = (Math.random() * 0.5 + 0.5).toFixed(2); // Alpha từ 0.5 - 1
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    return (
        <div className="Pages">

            {location.pathname === "/Pages" && <div className="list-pages-demo">
                <Link to="/assets/html/sub_website/portfolio_pxh2910_v01/index.html" target="_blank">Portfolio</Link>
                <Link to="/assets/html/sub_website/drum_kit/index.html" target="_blank">Drum Kit</Link>
                <Link to="/assets/html/Portfolio-Art-Kid-Garden/index.html" target="_blank">Portfolio Art Kid Garden</Link>
                <Link to="/Pages/Gallery">Gallery</Link>
            </div>}
            <div className="content-children">
                <Outlet />
            </div>
            
        </div>
    )

}

export default Pages
