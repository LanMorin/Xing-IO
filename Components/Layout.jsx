import Head from "next/head";
import Image from "next/image"
import Style from "../styles/Layout.module.css";
import Header from "./Header";
import { navLinks } from "../utils/data";
import { useRouter } from "next/router";

export default function Layout({ children }) {
    const router = useRouter();

    return (
        <div className={Style.gridLayout}>
            <Head>
                <title>{navLinks.map((link) => (router.pathname === link.path ? `Xing | ${link.name}` : undefined))}</title>
                <meta name="description" content={navLinks.map((link) => (router.pathname === link.path ? link.dsc : undefined))} />
                <link rel="icon" type="image/ico" href="/favicon.ico" />
            </Head>

            <Header></Header>

            <video
                id="background-video"
                loop
                autoPlay
                muted
                className={Style.bkgVideo}
                src={"/video/videoBkg.mov"}
            ></video>

            <main className={Style.mainContainer}>
                {children}
            </main>

            {/* <footer className={Style.gridFooterLayout}>
                <div className={Style.rightsReserved}>
                    2022 Xing IO. All rights reserved
                </div>
                <ul className={Style.gridFooterSocial}>
                    <li className={Style.svgSocialFooter}>
                        <a href={"/"} target="_blank">
                            <Image src={"/svg/social/facebookSquare.svg"} width={40} height={40}></Image>
                        </a>
                    </li>
                    <li className={Style.svgSocialFooter}>
                        <a href={"/"} target="_blank">
                            <Image src={"/svg/social/twitterSquare.svg"} width={40} height={40}></Image>
                        </a>
                    </li>
                    <li className={Style.svgSocialFooter}>
                        <a href={"/"} target="_blank">
                            <Image src={"/svg/social/youtubeSquare.svg"} width={40} height={40}></Image>
                        </a>
                    </li>
                </ul>
            </footer> */}
        </div>
    );
};