import Style from "../../styles/Tabs.module.css";

export default function TabContent({ id, activeContent, children }) {

    return (
        activeContent === id ? <div className={Style.tabContentItem}>
            {children}
        </div>
            :
            null
    );

}