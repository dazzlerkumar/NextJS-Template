import { IoMdCheckmarkCircle } from "react-icons/io";
import style from "./Button.module.css";
/*
 * Components : Button
 * Props :
 *      type:string,
 *      text:string,
 *      disabled:boolen,
 *      theme:string,
 *      padding:string,
 *      fontSize:string,
 *      fontWeight:string,
 *      bgcolor:string,
 *
 */
export const Button = ({
    theme,
    padding,
    margin,
    width,
    fontsize,
    fontweight,
    bgcolor,
    type,
    text,
    disabled,
    height,
    onClick,
    form
}) => {
    return (
        <button
            className={`${style.button} ${style[theme]}`}
            style={{
                width: width,
                height: height,
                padding: padding,
                margin: margin,
                fontSize: fontsize,
                fontWeight: fontweight,
                backgroundColor: bgcolor,
            }}
            type={type}
            disabled={disabled}
            onClick={onClick}
            form={form}
        >
            {text}
        </button>
    );
};
Button.defaultProps = {
    text: "Click Here !",
    theme: "dark",
    type: "button",
    disabled: false,
    form:""
};

/* End of  Button */

