import React, { useState, useEffect, useRef } from "react";
import style from "./ellipsis.module.css";
import { IoEllipsisVertical } from "react-icons/io5";
//API

export default function SelectEllipsis({ options, setselected, setRefresh }) {
    const [isOpen, setIsOpen] = useState(false);
    const clickRef = useRef();

    const toggling = () => setIsOpen(!isOpen);
    const onOptionClicked = async (value) => {
        if (setselected != undefined) {
            setselected(value);
        }

        setIsOpen(false);
    };
    if (options.length == 0) {
        options.push("-");
    }

    // Track events outside scope
    const clickOutside = (e) => {
        if (clickRef.current.contains(e.target)) {
            return;
        }
        // outside click
        setIsOpen(false);
    };
    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", clickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", clickOutside);
        };
    }, [isOpen]);

    return (
        <span className={style.ellipsis} ref={clickRef}>
            <div onClick={toggling}>
                <IoEllipsisVertical />
            </div>

            {isOpen ? (
                <ul>
                    {options.map((option, i) => (
                        <li onClick={() => onOptionClicked(option)} key={i}>
                            <span>{option?.icon}</span>
                            {" " + option.name}
                        </li>
                    ))}
                </ul>
            ) : null}
        </span>
    );
}

SelectEllipsis.defaultProps = {
    options: ["Option 1", "Option 2", "Option 3"],
};
