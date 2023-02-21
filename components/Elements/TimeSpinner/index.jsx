import style from "./timespinner.module.css";
import React, { useState, useRef } from "react";

//API
let timeArray = [
    "0:00",
    "0:30",
    "1:00",
    "1:30",
    "2:00",
    "2:30",
    "3:00",
    "3:30",
    "4:00",
    "4:30",
    "5:00",
    "5:30",
    "6:00",
    "6:30",
    "7:00",
    "7:30",
    "8:00",
    "8:30",
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
];
export default function TimeSpinner({}) {
    const [counter, setCounter] = useState(0);
    const incrementTime = () => {
        let temp = counter;
        if (counter < 47) {
            setCounter(temp + 1);
        } else {
            setCounter(0);
        }
    };
    const decrementTime = () => {
        let temp = counter;
        if (counter > 0) {
            setCounter(temp - 1);
        } else {
            setCounter(47);
        }
    };
    return (
        <div className={style.container}>
            <button
                className={style.btn}
                style={{ paddingBottom: "0.1rem" }}
                onClick={() => decrementTime()}
            >
                -
            </button>
            <span className={style.text}>
                <p>{timeArray[counter]}</p>
            </span>
            <button className={style.btn} onClick={() => incrementTime()}>
                +
            </button>
        </div>
    );
}
