import Style from "../../styles/Tabs.module.css";

export default function TabContent({ id, activeTab, children }) {

    return (
        activeTab === id ? <ul className={Style.tabContent}>
            {children}
        </ul>
            :
            null
    );

}