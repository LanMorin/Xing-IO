import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { navLinks } from "../utils/data";
import utilStyles from "../styles/utils.module.css";
import Style from "../styles/Navbar.module.css";

export default function Navbar() {
    const router = useRouter();
    return (
        <nav>

            <ul className={utilStyles.gridContainer}>
                {navLinks.map((link) => (
                    <li className={Style.iconContainer} key={link.name} >
                        <Link href={link.path} passHref >
                            <a className={Style.iconaContainer}>
                                <Image className={router.pathname === link.path ? Style.activeLink : Style.disableLink} src={link.src} width={25} height={25} title={link.name}></Image>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul >

        </nav>
    )
}
