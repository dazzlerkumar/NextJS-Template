import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import style from "./Header.module.css";
//components
import UserDropdown from "./UserDropdown";
//Assets
import { BsBell } from "react-icons/bs";
//context
import { ManagedUI } from "@contexts/ManagedUI";
const pages = [
    {
        name: "Link 1",
        link: "/",
    },
    {
        name: "Link 2",
        link: "/",
    },

    {
        name: "Link 3",
        link: "/",
    },
    {
        name: "Link 4",
        link: "/",
    },
];
const notiDot = 10;
const Tabs = ({ pathName, data }) => {
    const { setShowSidebar } = useContext(ManagedUI);
    const link = data.link.split("/");
    const clax = pathName[1] === link[1] ? style.active : null;
    const [tooltip, setTooltip] = useState(false);
    return (
        <li className={clax} onClick={() => setShowSidebar(null)}>
            <Link href={data.link}>
                {data.name}
                {data.name === "Link 3" && (
                    <>
                        <div
                            className={
                                notiDot > 0 ? style.navDotActive : style.navDot
                            }
                            onMouseOver={() => setTooltip(true)}
                            onMouseOut={() => setTooltip(false)}
                        >
                            {notiDot}
                        </div>
                        {tooltip && data.name === "Link 3" ? (
                            <p className={style.tooltip}>
                                {notiDot + " conflicts tomorrow"}
                            </p>
                        ) : null}
                    </>
                )}
            </Link>
        </li>
    );
};
function Header() {
    const { showSidebar, setShowSidebar } = useContext(ManagedUI);
    const pathName = useRouter().pathname.split("/");
    return (
        <div className={style.headerContainer}>
            <div className={style.container}>
                {" "}
                <div className={style.logo_container}>
                    <Link href="/" passHref>
                        LOGO
                        {/* <Image
                            src="/samay_mini_logo.png"
                            alt="logo"
                            fill={true}
                        /> */}
                    </Link>
                </div>
                <nav
                    className={[style.nagivator, style[showSidebar]].join(" ")}
                >
                    <ul>
                        {pages.map((entry, key) => (
                            <Tabs key={key} pathName={pathName} data={entry} />
                        ))}
                    </ul>
                </nav>
                <div className={style.control_icons}>
                    {/*  <BsBell style={{ width: "1.5rem", height: "1.5rem" }} />*/}
                    <UserDropdown />
                    <div
                        className={`${style.menu} ${showSidebar}`}
                        onClick={() =>
                            setShowSidebar((prev) => {
                                if (prev == "") {
                                    return "open";
                                } else {
                                    return "";
                                }
                            })
                        }
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className={style.yellowStrip}></div>
        </div>
    );
}

export default Header;
