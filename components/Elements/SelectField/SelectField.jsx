import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import style from "./SelectField.module.css";
//Assets
import { RiCheckboxCircleFill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
//Takes simple array of options and returns a select field
export function SimpleSelect({
    options,
    selected,
    setselected,
    activeOptionIndex,
    required,
    bgColor,
    color,
    padding,
    margin,
    label,
    placeholder,
    fontsize,
    disabled,
    minWidth,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [localOptions, setLocalOptions] = useState();
    const [selectedOption, setSelectedOption] = useState(null);
    const inputRef = useRef();
    const toggling = () => {
        if (!disabled) {
            if (isOpen) {
                inputRef.current.blur();
            } else {
                inputRef.current.focus();
            }

            setIsOpen(!isOpen);
        }
    };

    const filterOptions = (e) => {
        //resetting the options on every render
        // setSelectedOption(null);
        //filtering the options
        let filteredOptions = options.filter((option) =>
            option.toLowerCase().includes(e.target.value.toLowerCase())
        );
        if (filteredOptions.length > 0) {
            setLocalOptions(filteredOptions);
            setSelectedOption(filterOptions[0]);
        } else {
            setLocalOptions([]);
        }
    };

    const onOptionClicked = (value, i) => {
        setSelectedOption(value);
        activeOptionIndex(i);
        setselected(value);
        setIsOpen(false);
    };
    useEffect(() => {
        //resetting the options on every render
        setLocalOptions(options);
        setSelectedOption(selected);
    }, [isOpen, selected, options]);
    return (
        <div
            className={
                disabled
                    ? `${style.dropdown} ${style.dropdownDisabled} `
                    : `${style.dropdown} `
            }
            style={{
                margin: margin,
                fontSize: fontsize,
                backgroundColor: bgColor,
                minWidth: minWidth,
            }}
            unselectable
        >
            <div
                onClick={toggling}
                style={{ padding: padding, color: color }}
                className={style.innerDiv}
            >
                <input
                    onChange={(e) => {
                        filterOptions(e);
                        setSelectedOption(e.target.value);
                    }}
                    placeholder={placeholder}
                    value={selectedOption}
                    required={required}
                    disabled={disabled}
                    ref={(input) => (inputRef.current = input)}
                />
                {isOpen ? (
                    <IoMdArrowDropup color={color} />
                ) : (
                    <IoMdArrowDropdown color={color} />
                )}
            </div>{" "}
            {isOpen && (
                <ul className={style.ul}>
                    {localOptions !== undefined && localOptions.length > 0 ? (
                        localOptions.map((option, i) => (
                            <li
                                onClick={() => onOptionClicked(option, i)}
                                key={i}
                            >
                                {option}
                            </li>
                        ))
                    ) : (
                        <li>No Options</li>
                    )}
                </ul>
            )}
        </div>
    );
}
SimpleSelect.defaultProps = {
    label: "Select Field",
    placeholder: "Select",
    padding: "0.35rem 1rem",
    fontsize: "0.875rem",
    activeOptionIndex: () => {},
    setselected: () => {},
    disabled: false,
};
export function SelectSubList({
    options,
    selected,
    setselected,
    bgColor,
    color,
    padding,
    margin,
    placeholder,
    fontsize,
    disabled,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [subOptionArray, setSubOptionArray] = useState([]);
    const clickRef = useRef();
    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value, i) => {
        setSelectedOption(value, subOptionArray);
        /*     activeOptionIndex(i); */
        setselected(value);
        /* setIsOpen(false); */

        setSubOptionArray([]);
    };
    const subOptionSelect = (event, option, suboption, index) => {
        event.stopPropagation();
        let tempSubOptionArray = subOptionArray;
        let foundSubOption = null;
        let foundIndex = null;
        for (let i = 0; i < tempSubOptionArray.length; i++) {
            if (tempSubOptionArray[i] === suboption) {
                foundSubOption = tempSubOptionArray[i];
                foundIndex = i;
            }
        }
        if (foundSubOption) {
            tempSubOptionArray.splice(foundIndex, 1);
            setSubOptionArray(tempSubOptionArray);
            setselected(option, tempSubOptionArray);
            setSelectedOption(option);
        } else {
            tempSubOptionArray.push(suboption);

            setSubOptionArray(tempSubOptionArray);
            setselected(option, tempSubOptionArray);
            setSelectedOption(option);
        }
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
        setSelectedOption(selected);
        return () => {
            document.removeEventListener("mousedown", clickOutside);
        };
    }, [selectedOption, isOpen, selected]);
    return (
        <div
            className={
                disabled
                    ? `${style.dropdown} ${style.subOpdropdown} ${style.dropdownDisabled} `
                    : `${style.dropdown} ${style.subOpdropdown} `
            }
            style={{
                margin: margin,
                fontSize: fontsize,
                backgroundColor: bgColor,
            }}
            ref={clickRef}
            unselectable
        >
            <div
                onClick={disabled ? () => {} : toggling}
                style={{ padding: padding, color: color }}
                className={style.innerDiv}
            >
                <p>
                    {selected != undefined && selected.length != 0 ? (
                        selectedOption
                    ) : (
                        <p
                            className={style.placeholderText}
                            style={{ fontSize: fontsize, color: color }}
                        >
                            {" "}
                            {placeholder}
                        </p>
                    )}
                </p>
                {isOpen ? (
                    <IoMdArrowDropup color={color} />
                ) : (
                    <IoMdArrowDropdown color={color} />
                )}
            </div>{" "}
            {isOpen && (
                <ul onMouseLeave={() => closeDropdown()} className={style.ul}>
                    {options.map((option, i) => (
                        <li
                            onClick={() => onOptionClicked(option.option, i)}
                            key={i}
                            className={
                                selected != undefined &&
                                selectedOption.toLowerCase() ===
                                    option.option.toLowerCase()
                                    ? style.selected
                                    : null
                            }
                        >
                            <span>
                                {selected != undefined &&
                                selectedOption.toLowerCase() ===
                                    option.option.toLowerCase() ? (
                                    <MdRadioButtonChecked />
                                ) : (
                                    <MdRadioButtonUnchecked />
                                )}
                                {option.option}
                            </span>

                            {option.subOptions != null && (
                                <ul className={style.InnerUL}>
                                    {option.subOptions.map((subOp, k) => {
                                        let flag = false;
                                        for (
                                            let i = 0;
                                            i < subOptionArray.length;
                                            i++
                                        ) {
                                            if (subOptionArray[i] === subOp) {
                                                flag = true;
                                            }
                                        }
                                        return (
                                            <li
                                                key={k}
                                                className={style.subListItem}
                                                onClick={(event) =>
                                                    subOptionSelect(
                                                        event,
                                                        option.option,
                                                        subOp,
                                                        k
                                                    )
                                                }
                                            >
                                                {flag ? (
                                                    <RiCheckboxCircleFill color="var(--blue)" />
                                                ) : (
                                                    <RiCheckboxCircleFill color="var(--grey-1)" />
                                                )}
                                                {subOp}
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

SelectSubList.defaultProps = {
    /* options: ["Option 1", "Option 3", "Option 2", "Long Item Labelsdjbfbh"], */
    options: [
        {
            option: "Option 1",
            subOptions: null,
        },
        {
            option: "Option 2",
            subOptions: ["Sub 1", "Sub 2", "Sub 3", "Sub 4", "Sub 5"],
        },
    ],
    label: "Select Field",
    placeholder: "Select",
    padding: "0.35rem 1rem",
    fontsize: "0.875rem",
    activeOptionIndex: () => {},
    setselected: () => {},
    disabled: false,
};

//take an array of objects and return an array of objects with the key value pair
export function SelectForObjects({
    options,
    optionName,
    optionID,
    selected,
    setselected,
    activeOptionIndex,
    required,
    bgColor,
    color,
    padding,
    margin,
    label,
    placeholder,
    fontsize,
    disabled,
    minWidth,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [localOptions, setLocalOptions] = useState();
    const [selectedOption, setSelectedOption] = useState(null);
    const inputRef = useRef();
    const toggling = () => {
        if (!disabled) {
            if (isOpen) {
                inputRef.current.blur();
            } else {
                inputRef.current.focus();
            }

            setIsOpen(!isOpen);
        }
    };

    const filterOptions = (e) => {
        let filteredOptions = options.filter((option) =>
            option[optionName]
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
        );
        if (filteredOptions.length > 0) {
            setLocalOptions(filteredOptions);
        } else {
            setLocalOptions([]);
            setSelectedOption(null);
        }
    };
    const onOptionClicked = (value, i) => {
        setSelectedOption(value[optionName]);
        activeOptionIndex(value[optionID]);
        setselected(value[optionName], value[optionID]);
        setIsOpen(false);
    };
    useEffect(() => {
        setLocalOptions(options);

        setSelectedOption(selected);
    }, [isOpen, selected, options]);

    return (
        <div
            className={
                disabled
                    ? `${style.dropdown} ${style.dropdownDisabled} `
                    : `${style.dropdown} `
            }
            style={{
                margin: margin,
                fontSize: fontsize,
                backgroundColor: bgColor,
                minWidth: minWidth,
            }}
            unselectable
        >
            <div
                onClick={toggling}
                style={{ padding: padding, color: color }}
                className={style.innerDiv}
            >
                <input
                    onChange={(e) => {
                        filterOptions(e);
                        setSelectedOption(e.target.value);
                    }}
                    placeholder={placeholder}
                    value={selectedOption}
                    required={required}
                    disabled={disabled}
                    ref={(input) => (inputRef.current = input)}
                />
                {isOpen ? (
                    <IoMdArrowDropup color={color} />
                ) : (
                    <IoMdArrowDropdown color={color} />
                )}
            </div>{" "}
            {isOpen && (
                <ul className={style.ul}>
                    {localOptions !== undefined && localOptions.length > 0 ? (
                        localOptions.map((option, i) => (
                            <li
                                onClick={() => onOptionClicked(option, i)}
                                key={i}
                            >
                                {option[optionName]}
                            </li>
                        ))
                    ) : (
                        <li>No Options</li>
                    )}
                </ul>
            )}
        </div>
    );
}

SelectForObjects.defaultProps = {
    options: ["Option 1", "Option 1", "Option 1", "Long Item Labelsdjbfbh"],
    label: "Select Field",
    placeholder: "Select",
    padding: "0.35rem 1rem",
    fontsize: "0.875rem",
    activeOptionIndex: () => {},
    setselected: () => {},
    disabled: false,
};

/* multiple */
export function MultiSelect({
    options,
    optionName,
    optionID,
    selected,
    setselected,
    required,
    bgColor,
    color,
    padding,
    margin,
    label,
    placeholder,
    fontsize,
    disabled,
    minWidth,
    title,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [localOptions, setLocalOptions] = useState();
    const [selectedOption, setSelectedOption] = useState(selected);
    const [searchString, setSearchString] = useState("");
    let selectedOptionsLength = selectedOption.length;
    const inputRef = useRef();
    const toggling = () => {
        if (!disabled) {
            if (isOpen) {
                inputRef.current.blur();
            } else {
                inputRef.current.focus();
            }

            setIsOpen(!isOpen);
        }
    };
    //Searching
    const filterOptions = (e) => {
        let filteredOptions = options.filter((option) =>
            option[optionName]
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
        );
        if (filteredOptions.length > 0) {
            setLocalOptions(filteredOptions);
        } else {
            setLocalOptions([]);
        }
    };
    //Selecting
    const handleSelect = async (e, option) => {
        e.stopPropagation();
        const found = selectedOption.find(
            (s) => s[optionID] === option[optionID]
        );
        if (found) {
            const newSelected = selectedOption.filter(
                (s) => s[optionID] !== option[optionID]
            );
            setSelectedOption(newSelected);
            setselected(newSelected);

            return;
        }
        const existSelection = [...selected, option];
        setSelectedOption(existSelection);
        setselected(existSelection);
    };
    useEffect(() => {
        //reset local options
        setLocalOptions(options);
        //cleaning last searched
        setSearchString("");
    }, [selectedOption, isOpen]);

    return (
        <div
            className={
                disabled
                    ? `${style.dropdown} ${style.dropdownDisabled} `
                    : `${style.dropdown} `
            }
            style={{
                margin: margin,
                fontSize: fontsize,
                backgroundColor: bgColor,
                minWidth: minWidth,
            }}
            title={title}
        >
            <div
                onClick={toggling}
                style={{ padding: padding, color: color }}
                className={`${style.innerDiv} ${style.multipleSelectInnerDiv} `}
            >
                {/*   {isOpen ? ( */}
                <input
                    onChange={(e) => {
                        filterOptions(e);
                        setSearchString(e.target.value);
                    }}
                    placeholder={placeholder}
                    value={searchString}
                    required={required}
                    autoFocus
                    disabled={disabled}
                    ref={(input) => (inputRef.current = input)}
                    style={
                        isOpen
                            ? {
                                  position: "absolute",
                                  zIndex: "1",
                                  backgroundColor: "#fff",
                                  width: "60%",
                              }
                            : { position: "absolute", zIndex: "-1" }
                    }
                />
                {/*    ) : (  */}
                <div
                    className={style.selectedOptionList}
                    /*   style={isOpen ? { display: "none" } : { display: "block" }} */
                >
                    {selected.length == 0 ? (
                        <p className={style.placeholderText}>{placeholder}</p>
                    ) : (
                        <p
                            title={
                                selected[selectedOptionsLength - 1][optionName]
                            }
                        >
                            {selected[selectedOptionsLength - 1][optionName]}{" "}
                            {selectedOptionsLength > 1 &&
                                `+ ${selected.length - 1}`}
                        </p>
                    )}
                </div>
                {/*  )} */}
                <div className={style.selectedOptionList}>
                    <span
                        onClick={(e) => {
                            e.stopPropagation();
                            setselected([]);
                            setSelectedOption([]);
                        }}
                    >
                        <MdOutlineClose />
                    </span>

                    {isOpen ? (
                        <IoMdArrowDropup color={color} />
                    ) : (
                        <IoMdArrowDropdown color={color} />
                    )}
                </div>
            </div>{" "}
            {isOpen && (
                <ul
                    onMouseLeave={() => {
                        setIsOpen(false);
                        setSearchString("");
                    }}
                    style={{
                        listStyle: "none",
                        padding: "0",
                    }}
                    className={style.ul}
                >
                    {localOptions !== undefined && localOptions.length > 0 ? (
                        localOptions.map((option, index) => {
                            const isSelected = selectedOption.find(
                                (s) => s[optionID] === option[optionID]
                            );
                            return (
                                <li
                                    onClick={(e) => handleSelect(e, option)}
                                    key={index}
                                >
                                    <div className={style.multiselectOption}>
                                        {isSelected ? (
                                            <p className={style.selectedText}>
                                                <RiCheckboxCircleFill color="var(--blue)" />
                                            </p>
                                        ) : (
                                            <p className={style.selectedText}>
                                                <RiCheckboxCircleFill />
                                            </p>
                                        )}
                                        <p className="m-0 dark:text-white">
                                            {option[optionName]}
                                        </p>
                                    </div>
                                </li>
                            );
                        })
                    ) : (
                        <li style={{ cursor: "no-drop" }}>
                            <div className={style.multiselectOption}>
                                <p className="m-0 dark:text-white">
                                    No options available
                                </p>
                            </div>
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
}

MultiSelect.defaultProps = {
    options: [
        {
            id: 1,
            name: "Mai Pehla",
        },
        {
            id: 2,
            name: "Mere ko bhi 1st Ane ka hai",
        },
        {
            id: 3,
            name: "Atleast, I'm not least",
        },
        {
            id: 4,
            name: "First from last :)",
        },
    ],
    optionName: "name",
    optionID: "id",
    label: "Select Field",
    placeholder: "Select",
    padding: "0.35rem 1rem",
    fontsize: "0.875rem",
    activeOptionIndex: () => {},
    selected: [],
    setselected: () => {},
    disabled: false,
};

export function AdvanceSelect({
    options,
    optionName,
    optionID,
    selected,
    setselected,
    activeOptionIndex,
    required,
    bgColor,
    color,
    padding,
    margin,
    label,
    placeholder,
    fontsize,
    disabled,
    minWidth,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const clickRef = useRef();
    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value, i) => {
        setSelectedOption(value[optionName]);

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
        setSelectedOption(selected);
        return () => {
            document.removeEventListener("mousedown", clickOutside);
        };
    }, [isOpen, selected]);

    return (
        <div
            className={
                disabled
                    ? `${style.dropdown} ${style.dropdownDisabled} `
                    : `${style.dropdown} `
            }
            style={{
                margin: margin,
                fontSize: fontsize,
                backgroundColor: bgColor,
                minWidth: minWidth,
            }}
            ref={clickRef}
            unselectable
        >
            <div
                onClick={disabled ? () => {} : toggling}
                style={{ padding: padding, color: color }}
                className={style.innerDiv}
            >
                <p>
                    {selected != undefined && selected.length != 0 ? (
                        selectedOption
                    ) : (
                        <p
                            className={style.placeholderText}
                            style={{ fontSize: fontsize, color: color }}
                        >
                            {" "}
                            {placeholder}
                        </p>
                    )}
                </p>
                {isOpen ? (
                    <IoMdArrowDropup color={color} />
                ) : (
                    <IoMdArrowDropdown color={color} />
                )}
            </div>{" "}
            {isOpen && (
                <ul onMouseLeave={() => closeDropdown()} className={style.ul}>
                    {options.map((option, i) => (
                        <li onClick={() => onOptionClicked(option, i)} key={i}>
                            {option[optionName]}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

SelectForObjects.defaultProps = {
    options: ["Option 1", "Option 1", "Option 1", "Long Item Labelsdjbfbh"],
    label: "Select Field",
    placeholder: "Select",
    padding: "0.35rem 1rem",
    fontsize: "0.875rem",
    activeOptionIndex: () => {},
    setselected: () => {},
    disabled: false,
};
