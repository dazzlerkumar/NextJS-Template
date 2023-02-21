import style from "./radio.module.css";
import { RadioGroupContext } from "./group";
import { useContext, useState } from "react";
/* 
-- Component : Input field with custom styling
-- Props : label, placeholder, type (input type), 
            padding (same as vanilla CSS, shorhand also valid) 
*/

function Radio({ value, name, label, onClick, onChange, isActive }) {
    // const { useRadio, setRadio } = useContext(RadioGroupContext);
    const [checked, setChecked] = useState(null);
    return (
        <label
            className={isActive == null ? style.radio : style.radioActive}
            onClick={onClick}
        >
            <input
                className={style.radio__input}
                type="radio"
                name={name}
                value={value}
            />
            <span className={style.radio__control} />
            {label && <span className={style.radio__label}>{label}</span>}
        </label>
    );
}

Radio.defaultProps = { onChange: () => {}, onClick: () => {}, value: null };
export default Radio;
