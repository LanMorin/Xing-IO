import Style from "../../styles/Tabs.module.css";

export default function TabNavItem({ id, title, activeTab, setActiveTab }) {

    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <li onClick={handleClick} className={activeTab === id ? Style.active : undefined}>
            <button type="button" className={activeTab === id ? `${Style.activeButton} ${Style.itemTab}` : Style.itemTab}>{title}</button>
        </li>
    );

}