import Image from "next/image";
import style from "./avatar.module.css";

//Assets

function Avatar({ imgUrl, userName }) {
    return (
        <div className={style.avatarBorder}>
            {" "}
            {imgUrl == null ? (
                userName[0].toUpperCase()
            ) : (
                <Image
                    src="/Assets/team1.png"
                    alt="Team Image"
                    layout="fill"
                    objectFit="contain"
                />
            )}
        </div>
    );
}

Avatar.defaultProps = {
    userName: "Avatar",
    imgUrl: null,
};

export default Avatar;
