import "./assets/main.css"
import logo from "./assets/Remove-BG-Logo.png"
import { Link, NavLink } from "react-router-dom"

const Menu = () => {

    return (

        <div className="Menu">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo PXH2910" />
                    <div className="virtual-numbers">
                        <picture>
                            <img src="https://camo.githubusercontent.com/ebc5f79440b014691fb554090298eba5bbcce45f4b613db6c8658b411c4ddb4f/68747470733a2f2f70726f66696c652d636f756e7465722e676c697463682e6d652f6b6974616a696d61323931302f636f756e742e7376673f"
                                data-canonical-src="https://profile-counter.glitch.me/kitajima2910/count.svg?"
                                alt="Virtual Numbers" />
                        </picture>
                    </div>
                </Link>
            </div>
            <div className="name">
                <NavLink to="/Games">{({ isActive, isPending, isTransitioning }) => (
                    <span className={isActive ? "active" : ""}>Games</span>
                )}</NavLink>
                <NavLink to="/Tools">{({ isActive, isPending, isTransitioning }) => (
                    <span className={isActive ? "active" : ""}>Tools</span>
                )}</NavLink>
            </div>
            <div className="contacts">
                <Link to="https://www.facebook.com/kitajima2910" target="_blank">
                    <i className="fa-brands fa-facebook"></i>
                </Link>
            </div>
        </div>

    )

}

export default Menu
