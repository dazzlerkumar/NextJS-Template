import style from "./radio.module.css";
import { useRef, useState, useContext, createContext } from "react";
/* 
-- Component : Input field with custom styling
-- Props : label, placeholder, type (input type), 
            padding (same as vanilla CSS, shorhand also valid) 
*/
export const RadioGroupContext = createContext();

function RadioGroup({ name, children }) {
    const [useRadio, setRadio] = useState({
        name: name,
    });
    return (
        <RadioGroupContext.Provider
            className={style.radioGroup}
            value={(useRadio, setRadio)}
        >
            {children}
        </RadioGroupContext.Provider>
    );
}

RadioGroup.defaultProps = {};
export default RadioGroup;
