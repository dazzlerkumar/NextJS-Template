import React from "react";
import style from "./sidepane.module.css";

function SidePane({ children, position }) {
    let dynamicStyles = {};
    /* Position */
    switch (position) {
        case "right":
            {
                dynamicStyles = {
                    ...dynamicStyles,
                    right: 0,
                };
            }
            break;
        case "left":
            {
                dynamicStyles = {
                    ...dynamicStyles,
                    left: 0,
                };
            }
            break;
        case "center":
            {
                dynamicStyles = {
                    ...dynamicStyles,
                    left: 0,
                    right: 0,
                    margin: "0 auto",
                };
            }
            break;
    }
    return (
        <div className={style.container} style={dynamicStyles}>
            {children}
        </div>
    );
}

export default SidePane;
