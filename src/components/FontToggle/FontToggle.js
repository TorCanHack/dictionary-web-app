import React, {useState, useEffect} from "react";
import arrowDownLogo from '../../assets/images/icon-arrow-down.svg'

const FontToggle = () => {
    const [selectedFont, setSelectedFont] = useState('Lora');

    const handleFontChange = (event) => {
        setSelectedFont(event.target.value);
    };

    useEffect(() => {
        document.documentElement.style.fontFamily = selectedFont;
    }, [selectedFont])

    return (
        <div className="w-32  flex flex-row border-r border-gray-300 ">
            
            <select value={selectedFont} onChange={handleFontChange} className="appearance-none focus:outline-none bg-white  dark:bg-black dark:shadow-md md:relative md:right-2 md:text-lg cursor-pointer ">
                
            
                <option value="Inter">Sans Serif</option>
                <option value="Lora">Serif</option>
                <option value="Inconsolata">Monospace</option>

            </select>
            <img className="md:relative md:right-1" src={arrowDownLogo} alt=""/>

        </div>
    )

}

export default FontToggle;