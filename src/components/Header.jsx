import PrimaryButton from "./buttons/PrimaryButton"
import logo from "/icons/logo.svg"

import "./Header.css"

export default function Header() {
    return (
        <header>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="menu">
                    <li><a href="#">Marketplace</a></li>
                    <li><a href="#">Artwork</a></li>
                    <li><a href="#">Create</a></li>
                    <li><a href="#">Feed</a></li>
                </ul>
                <div className="connect-btn">
                    <PrimaryButton>Connect Wallet</PrimaryButton>
                </div>
            </div>
        </header>
    )
}