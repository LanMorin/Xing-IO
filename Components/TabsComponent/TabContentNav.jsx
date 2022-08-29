import Style from "../../styles/Tabs.module.css";

export default function TabNavItem({ id, title, activeContent, setActiveContent }) {

    const handleClick = () => {
        setActiveContent(id);
    };

    return (
        <li>
            <h1 onClick={handleClick} className={activeContent === id ? `${Style.subActive} ${Style.tabContentNav}` : Style.tabContentNav}>{title}</h1>
        </li>
    );

}