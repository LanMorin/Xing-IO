import Navbar from "./Navbar";
import Link from "next/link";
import React, { useEffect } from 'react'
import { useRouter } from "next/router";
import { navLinks } from "../utils/data";
import Style from "../styles/Header.module.css";

export default function Header() {
    const router = useRouter();
    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 2) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <header className={scrolled ? Style.scrolled : Style.navbar}>

            <div className={Style.gridResize}>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link href="/">
                                <a><h1 className={Style.logo}>{router.pathname === link.path && "Xing | " + link.name}</h1></a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Navbar></Navbar>
                <button className={Style.menuBar}>Menu</button>
            </div>

        </header>
    )
}