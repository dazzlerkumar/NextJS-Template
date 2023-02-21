import React from "react";
import style from "./searchbar.module.css";
import { IoMdSearch } from "react-icons/io";
/* 
Search component */
export default function SearchBar(props) {
    return (
        <div className={style.searchbar}>
            <IoMdSearch />
            <input
                placeholder={props.placeholder}
                onChange={(e) => props.fn(e.target.value)}
            />
        </div>
    );
}
SearchBar.defaultProps = {
    placeholder: "Search",
    fn: (e) => {
        console.log(e);
    },
};
