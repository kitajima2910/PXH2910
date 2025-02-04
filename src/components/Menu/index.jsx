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
                            <div align="center">
                                <img src="https://profile-counter.glitch.me/kitajima2910/count.svg?" alt="Virtual Numbers" />
                            </div>
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
                <NavLink to="/Pages">{({ isActive, isPending, isTransitioning }) => (
                    <span className={isActive ? "active" : ""}>Pages</span>
                )}</NavLink>
                <NavLink to="/Code">{({ isActive, isPending, isTransitioning }) => (
                    <span className={isActive ? "active" : ""}>Code</span>
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
