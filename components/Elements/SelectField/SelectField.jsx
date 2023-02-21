import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import style from "./SelectField.module.css";
//Assets
import { GrPowerReset } from "react-icons/gr";
export function SimpleSelect({
    options,
    selected,
    setselected,
    activeOptionIndex,
    required,
    bgColor,
    padding,
    margin,
    label,
    placeholder,
    fontsize,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(selected);
    const clickRef = useRef();
    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value, i) => {
        setSelectedOption(value);
        activeOptionIndex(i);
        setselected(value);
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
    }, [selectedOption, isOpen]);

    return (
        <div
            className={style.dropdown}
            style={{ margin: margin, fontSize: fontsize }}
            ref={clickRef}
        >
            <div
                onClick={toggling}
                style={{ padding: padding }}
                className={style.innerDiv}
            >
                <p>
                    {selected != undefined && selected.length != 0 ? (
                        selectedOption
                    ) : (
                        <p
                            className={style.placeholderText}
                            style={{ fontSize: fontsize }}
                        >
                            {" "}
                            {placeholder}
                        </p>
                    )}
                </p>

                <FaChevronDown />
            </div>{" "}
            {isOpen && (
                <ul onMouseLeave={() => closeDropdown()}>
                    {options.map((option, i) => (
                        <li onClick={() => onOptionClicked(option, i)} key={i}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

SimpleSelect.defaultProps = {
    dropdownHeader: "Company XZY",
    options: ["Company JQL2", "Company AB", "Company 1"],
    label: "Select Field",
    placeholder: "Select",
    fontsize: "0.875rem",
    activeOptionIndex: () => {},
};

/* Select with Search */
export function SelectWithSearch({
    label,
    options,
    setSearchKeyword,
    setselected,
    padding,
    margin,
    placeholder,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Select");
    const searchInput = useRef(null);
    const clickRef = useRef();
    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (option, i) => {
        setSelectedOption(option.name);

        setselected(option);
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
            searchInput.current.focus();
        }
        return () => {
            document.removeEventListener("mousedown", clickOutside);
        };
    }, [selectedOption, isOpen]);

    return (
        <div
            className={style.dropdown}
            style={{ margin: margin }}
            ref={clickRef}
        >
            <label>{label}</label>
            <div
                onClick={toggling}
                style={{ padding: padding }}
                className={style.innerDiv}
            >
                {isOpen ? (
                    <input
                        ref={searchInput}
                        placeholder={selectedOption}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                        required
                        onBlur={() => setSearchKeyword(null)}
                    />
                ) : (
                    <p>{selectedOption}</p>
                )}
                <FaChevronDown />
            </div>{" "}
            {isOpen && (
                <ul onMouseLeave={() => closeDropdown()}>
                    {options.map((option, i) => (
                        <li onClick={() => onOptionClicked(option, i)} key={i}>
                            {option.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

SelectWithSearch.defaultProps = {
    dropdownHeader: "Company XZY",
    options: ["Company JQL2", "Company AB", "Company 1"],
    label: "Select Field",
    placeholder: "Select",
};

/* Multiple Select Dropdown */
export function MultiSelect({
    options,
    selected,
    setselected,
    padding,
    margin,
    label,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(selected);
    const clickRef = useRef();
    const toggling = () => setIsOpen(!isOpen);
    const handleSelect = async (e, option) => {
        e.stopPropagation();

        const found = selectedOption.find((s) => s === option);
        if (found) {
            const newSelected = selectedOption.filter((s) => s !== option);
            setSelectedOption(newSelected);
            setselected(newSelected);

            return;
        }
        const newSelected = [...selectedOption, option];
        setSelectedOption(newSelected);
        setselected(newSelected);
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
    }, [selectedOption, isOpen]);

    return (
        <div
            className={style.dropdown}
            style={{ margin: margin }}
            ref={clickRef}
        >
            <label>{label}</label>
            <div
                onClick={toggling}
                style={{ padding: padding }}
                className={style.innerDiv}
            >
                <div className={style.selectedOptionList}>
                    {selectedOption.length == 0 ? (
                        <p>Click on options to select & deselect</p>
                    ) : (
                        selectedOption.map((option, key) => (
                            <span key={key} className={style.selectedOptionBox}>
                                <p>{option}</p>
                            </span>
                        ))
                    )}
                </div>
                <div className={style.selectedOptionList}>
                    <span
                        onClick={(e) => {
                            e.stopPropagation();
                            setselected([]);
                            setSelectedOption([]);
                        }}
                    >
                        <GrPowerReset />
                    </span>

                    <FaChevronDown />
                </div>
            </div>{" "}
            {isOpen && (
                <ul onMouseLeave={() => closeDropdown()}>
                    {options.map((option, index) => {
                        const isSelected = selectedOption.find(
                            (s) => s === option
                        );
                        return (
                            <li
                                onClick={(e) => handleSelect(e, option)}
                                key={index}
                            >
                                <div className={style.multiselectOption}>
                                    <p className="m-0 dark:text-white">
                                        {option}
                                    </p>
                                    {isSelected && (
                                        <p className={style.selectedText}>
                                            Selected
                                        </p>
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

MultiSelect.defaultProps = {
    dropdownHeader: "Company XZY",
    options: ["Company JQL2", "Company AB", "Company 1"],
    label: "Select Field",
};
/*End of Multiple Select Dropdown */

export function SelectForObjectArray({
    options,
    key,
    selected,
    defaultPlaceholder,
    setselected,
    label,
    required,
    padding,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(selected);

    const clickRef = useRef();
    if (options.length == 0) {
        options.push("-");
    }
    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value) => {
        setSelectedOption(value.name);
        setselected(value.id);
        setIsOpen(false);
    };
    const closeDropdown = (e) => {
        setIsOpen(false);
    };
    // Track events outside scope
    const clickOutside = (e) => {
        if (clickRef.current.contains(e.target)) {
            // inside click

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
    }, [selectedOption, isOpen]);
    return (
        <div
            className={style.dropdown}
            style={{ padding: padding }}
            ref={clickRef}
        >
            <label>{label}</label>
            <div className={style.objectDropdown}>
                <div onClick={toggling}>
                    <input
                        value={selectedOption}
                        placeholder={defaultPlaceholder}
                        required={required}
                    />
                    <FaChevronDown />
                </div>

                {isOpen ? (
                    <ul onMouseLeave={() => closeDropdown()}>
                        {options.map((option, i) => (
                            <li onClick={() => onOptionClicked(option)} key={i}>
                                {option[key]}
                            </li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </div>
    );
}

SelectForObjectArray.defaultProps = {
    dropdownHeader: "Company XZY",
    key: "name",
    options: [
        {
            id: 1,
            name: "Option 1",
        },
        {
            id: 2,
            name: "Option 2",
        },
        {
            id: 3,
            name: "Option 3",
        },
        {
            id: 4,
            name: "Option 4",
        },
        {
            id: 5,
            name: "Option 5",
        },
        {
            id: 6,
            name: "Option 6",
        },
    ],
    defaultPlaceholder: "Select",
};
