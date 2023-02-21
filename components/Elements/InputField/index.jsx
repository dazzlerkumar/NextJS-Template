import React, { useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import style from "./InputField.module.css"

/* 
-- Component : Input field with custom styling
-- Props : label, placeholder, type (input type), 
            padding (same as vanilla CSS, shorhand also valid) 
*/

function InputField(props) {
    const [write, setWrite] = useState(false);

    function onChangeHappens(inputValue) {
        props.setvalue(inputValue);
    }

    return (
        <div className="input-box">
            <label>{props.label}</label>
            <input
                style={{ padding: props.padding }}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e) => onChangeHappens(e.target.value)}
                required={props.required}
                disabled={props.disabled}
                maxLength={props.maxLen}
                readOnly={write}
            />
            {props.isPassword ? (
                <span
                    className="password-reveal"
                    onClick={() =>
                        props.setshowPassword((prevState) => !prevState)
                    }
                >
                    {props.showPassword ? <BsEye /> : <BsEyeSlash />}
                </span>
            ) : null}
        </div>
    );
}

InputField.defaultProps = {
    type: "text",
    label: "Input Field",
    placeholder: "Enter Text",
    padding: "1rem",
    maxLen: 64,
};
export default InputField;
