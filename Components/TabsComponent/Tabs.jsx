import { useState } from "react";
import Image from "next/image";
import TabContent from "./TabContent";
import TabContentNav from "./TabContentNav"
import TabNavItem from "./TabNavItem";
import TabContentItem from "./TabContentItem"
import Style from "../../styles/Tabs.module.css";
import { itemSection } from "../../utils/data";

export default function Tabs({ tabs }) {
    const [activeTab, setActiveTab] = useState("tab1");
    const [activeContent, setActiveContent] = useState("top1");

    return (
        <section className={Style.tabs}>

            <menu className={Style.nav}>
                {tabs.map((itm) => {
                    return (
                        <TabNavItem title={itm.title} id={itm.id} key={itm.id} activeTab={activeTab} setActiveTab={setActiveTab} />
                    )
                })}
            </menu>

            <div className={Style.blockContent}>
                {tabs.map((itm) => {
                    const submenu = itm.submenu;

                    return (
                        <article key={itm.id}>
                            <TabContent id={itm.id} activeTab={activeTab}>
                                <div className={Style.subBlockContainer}>
                                    <span></span>
                                    <span></span>
                                    {submenu.map((sub) => {
                                        return (
                                            <ul className={Style.subNavContent} key={sub.id}>
                                                <TabContentNav title={sub.title} id={sub.id} activeContent={activeContent} setActiveContent={setActiveContent} />
                                            </ul>
                                        )
                                    })}
                                </div>
                                <div className={Style.subBlockContent}>
                                    {submenu.map((sub) => {
                                        const social = sub.social

                                        return (
                                            <div key={sub.id} className={Style.bkgBlock} style={sub.id === activeContent ? { backgroundImage: sub.src } : { backgroundImage: "none" }}>
                                                <TabContentItem id={sub.id} activeContent={activeContent}>
                                                    <iframe className={Style.iFrameT} src={sub.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                                    {social?.map((scs) => {
                                                        return (
                                                            <ul className={Style.boxSocial} key={sub.title}>
                                                                <li className={Style.svgSocial}>
                                                                    <a href={scs?.youtube} target="_blank">
                                                                        <Image src={"/svg/social/youtubeSquare.svg"} width={40} height={40} title={scs.youtube}></Image>
                                                                    </a>
                                                                </li>
                                                                <li className={Style.svgSocial}>
                                                                    <a href={scs?.twitter} target="_blank">
                                                                        <Image src={"/svg/social/twitterSquare.svg"} width={40} height={40} title={scs.twitter}></Image>
                                                                    </a>
                                                                </li>
                                                                <li className={Style.svgSocial}>
                                                                    <a href={scs?.facebook} target="_blank">
                                                                        <Image src={"/svg/social/facebookSquare.svg"} width={40} height={40} title={scs.facebook}></Image>
                                                                    </a>
                                                                </li>
                                                                <li className={Style.svgSocial}>
                                                                    <a href={scs?.twitch} target="_blank">
                                                                        <Image src={"/svg/social/twitchSquare.svg"} width={40} height={40} title={scs.twitch}></Image>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        )
                                                    })}


                                                </TabContentItem>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className={Style.subBlockInfo}>
                                    {submenu.map((sub) => {
                                        return (
                                            activeContent === sub.id ?
                                                <div className={Style.infoGridBlock} key={sub.id}>

                                                    <div className={Style.infoReq}>
                                                        <em className={Style.infoReqText}>
                                                            Minimum requirements:
                                                            <br />
                                                            <br />
                                                            Operating system: 64-bit Windows 7.<br />
                                                            Processor: Intel Core i3 6300 or equivalent.<br />
                                                            Memory: 6GB - DDR3 @1333 RAM.<br />
                                                            Graphics: NVIDIA GeForce® GT 640.<br />
                                                            Internet: 512 kbps o más rápida.<br />
                                                            Hard disk: 22GB.<br />

                                                        </em>
                                                        <em className={Style.infoReqText}>
                                                            Minimum requirements:
                                                            <br />
                                                            <br />
                                                            Operating system: 64-bit Windows 7.<br />
                                                            Processor: Intel Core i5 3570K or equivalent.<br />
                                                            Memory: 8GB - DDR3 @1333 RAM.<br />
                                                            Graphics: NVIDIA GeForce® GTX 970.<br />
                                                            Internet: Banda ancha.<br />
                                                            Hard disk: 22GB.<br />
                                                        </em>
                                                    </div>

                                                </div>
                                                : null
                                        )
                                    })}
                                </div>
                            </TabContent>
                        </article>
                    )
                })}
            </div>

        </section>
    );

}