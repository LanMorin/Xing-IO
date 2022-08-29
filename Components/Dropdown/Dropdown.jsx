import { useState } from "react";
import { itemSection } from "../../utils/data";


export default function Dropdown() {
    const [currentTab, setCurrentTab] = useState(-1);

    <>
        <div>
            {itemSection.map((button, i) => (
                <button key={button.id} onClick={handleClick = () => { setCurrentTab(currentTab); }}>{button.title}</button>
            )
            )
            }
        </div>

        <div>
            {itemSection !== -1 &&
                <>
                    <h3>{itemSection.title}</h3>
                    <p>{itemSection.id}</p>
                </>
            }
        </div>
    </>
}