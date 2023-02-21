import React, { useEffect, useState, useRef, useContext } from "react";
import style from "./Header.module.css";

//Assets
import { useRouter } from "next/dist/client/router";

import { MdKeyboardArrowDown } from "react-icons/md";
//context
import { GlobalContext } from "@contexts/GlobalData";

const options = ["Change Password","Logout"];
export default function UserDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuth, setIsAuth } = useContext(GlobalContext);
    const router = useRouter();
    const clickRef = useRef();

    const toggling = () => {
        setIsOpen(!isOpen);
    };
    const onOptionClicked = (value) => {
        if (value === "Logout") {
            localStorage.clear();
            sessionStorage.clear();
            setIsAuth({
                token: null,
            });
            router.push("/login");
        }
        setIsOpen(false);
    };
    const closeDropdown = (e) => {
        setIsOpen(false);
    };
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
        <div
            className={style.userdropdowncontainer}
            /*   onClick={(e) => setblurContent((p) => !p)} */
            ref={clickRef}
        >
            <div onClick={toggling}>
                <div className={style.avatar}></div>
                <MdKeyboardArrowDown color="#fff" />
            </div>{" "}
            {isOpen && (
                <ul>
                    {options.map((option, i) => (
                        <li onClick={() => onOptionClicked(option)} key={i}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

UserDropdown.defaultProps = {
    dropdownHeader: "Company XZY",
    options: ["Company JQL2", "Company AB", "Company 1"],
};
