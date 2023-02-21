import style from "./cards.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
//componets
import { Button } from "../Buttons/Buttons";
import Avatar from "../Avatar";
//contexts
import { AuthContext } from "contexts/auth";

export const ChallengeCard = ({ data, onClick }) => {
    const router = useRouter();
    const { setPlanData } = useContext(AuthContext);
    console.log(data)
    const ClickFn = () => {
        setPlanData(data);
        router.push({
            pathname: `/challenge/${data.name}`,
        });
    };
    return (
        <div className={style.cardbody} onClick={() => ClickFn()}>
            {" "}
            <span className={style.coverimg}>
                <Image
                    src={
                        data.imageUrl == null
                            ? "/Assets/challengebg.png"
                            : data.imageUrl
                    }
                    layout="fill"
                    alt="challenge bg"
                    objectFit="cover"
                />
            </span>
            <span className={style.cardDetails}>
                <div className={[style.row, style.row1].join(" ")}>
                    <p>{data != null ? data.name : "Challenge N/A"}</p>
                    <Button
                        text="Delete"
                        theme="delete"
                        padding="0.125rem 0.5rem"
                        margin="0 0.5rem 0 0"
                        height="1rem"
                        fontsize="0.525rem"
                        onClick={onClick}
                    />
                </div>
                <div className={style.row}>
                    <p className={style.description}>
                        {data.description || "--"}
                    </p>
                </div>
                <div className={style.row}>
                    <p className={style.description}>
                        {data != null ? data.typeOfChallenge : "--"}
                    </p>
                </div>
                <div className={style.row}>
                    <p> {data?.point || " No Points"}</p>
                </div>
            </span>
        </div>
    );
};
export const AddChallengeCard = ({ fn }) => {
    return (
        <div className={[style.cardbody, style.addcard].join(" ")} onClick={fn}>
            <span className={style.addcardcircle}>+</span>
        </div>
    );
};
export const PackageCard = ({ data }) => {
    return (
        <div className={[style.cardbody, style.packagecard].join(" ")}>
            <div className={[style.row, style.row1].join(" ")}>
                <p>{data != null ? data.title : "Package Name"}</p>
                <Button
                    text="Edit"
                    padding="0.125rem 0.5rem"
                    margin="0 0.5rem 0 0"
                    height="1rem"
                    fontsize="0.525rem"
                    bgcolor="#3EC300"
                />
            </div>
            <div className={style.row}>
                <p className={style.description}>
                    {data != null ? data.description : "--"}
                </p>
            </div>
            <div className={style.row}>
                <p className={style.description}>
                    No. of Levels :- {data != null ? data.numberOfLevels : "--"}
                </p>
            </div>
            <div className={style.row}>
                <p className={style.description}>
                    Price :- {data != null ? data.price : "--"}
                </p>
            </div>
        </div>
    );
};
export const ScheduleCard = ({ data, onClick }) => {
    const scheduleDate = new Date(data.scheduledAt);
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        scheduleDate
    );

    return (
        <div
            className={[style.cardbody, style.ScheduleCard].join(" ")}
            onClick={onClick}
        >
            <div className={style.upperHalf}></div>
            <div className={style.logoPositioner}>
                <div>
                    <Avatar userName={data.challengerTeamName} />
                    <p className={style.teamName}>
                        {data != null || data != undefined
                            ? data.challengerTeamName
                            : " -- "}
                    </p>
                </div>
                <p>
                    <sup>V</sup>
                    <strong>/</strong>
                    <sub>S</sub>
                </p>
                <div>
                    <Avatar userName={data.defenderTeamName} />
                    <p className={style.teamName}>
                        {data != null || data != undefined
                            ? data.defenderTeamName
                            : " -- "}
                    </p>
                </div>
            </div>
            <div className={style.lowerHalf}>
                <p>{formattedDate}</p>
            </div>
        </div>
    );
};
export const GameCard = ({ data }) => {
    const router = useRouter();
    let formattedDate = "13th, Aug, 2022";
    if (data?.scheduledAt) {
        const scheduleDate = new Date(data.scheduledAt);
        const options = { year: "numeric", month: "short", day: "numeric" };
        formattedDate = new Intl.DateTimeFormat("en-US", options).format(
            scheduleDate
        );
    }

    return (
        <div
            className={[style.cardbody, style.ScheduleCard].join(" ")}
            onClick={() => router.push(`games/${data.id}`)}
        >
            {/*    <div className={style.upperHalf}></div> */}
            <div className={style.logoPositioner}>{data.name}</div>
            <div className={style.lowerHalf}>
                <p>{formattedDate}</p>
            </div>
        </div>
    );
};
