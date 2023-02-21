import style from "./VideoUpload.module.css";
import React, { useState, useRef} from "react";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

//Assets
import { AiOutlineCloudUpload } from "react-icons/ai";

//API
import { postUploadFile } from "@services/ApiInstance";
export default function VideoUpload({ fileUrl, setFileUrl }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [upload, setUpload] = useState(0);
    const [thumbnailUrl, setThumbnailUrl] = useState(null);
    const cancelFileUpload = useRef(null);

    //Uploading File to DB
    const handleFileSelect = async (event) => {
        const fileData = new FormData();

        setSelectedFile(event.target.files[0]);
        fileData.append("file", event.target.files[0]);
        const res = await postUploadFile(
            fileData,
            setUpload,
            cancelFileUpload,
            "video"
        );
            
        if (res.status == 200) {
            setThumbnailUrl(res.data.data.thumbnailUrl);
            setFileUrl(res.data.data);
        }
    };
    const cancelUpload = () => {
        if (cancelFileUpload.current)
            cancelFileUpload.current("User has canceled the file upload.");
        setSelectedFile(null);
    };

    return (
        <>
            {fileUrl == null ? (
                <div className={style.container}>
                    {selectedFile ? (
                        <span className={style.progressContainer}>
                            <div className={style.progressAnime}>
                                <CircularProgressbar
                                    value={upload}
                                    text={`${upload}%`}
                                    styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: "butt",
                                        textSize: "1.225rem",
                                        pathTransitionDuration: 0.5,
                                        pathColor: `rgba(0, 164, 109, ${
                                            upload / 100
                                        })`,
                                        textColor: "rgb(0, 164, 109)",
                                        trailColor: "#d6d6d6",
                                        backgroundColor: "#3e98c7",
                                    })}
                                />
                            </div>
                            <button
                                type="button"
                                className="button light"
                                onClick={() => cancelUpload()}
                            >
                                Cancel
                            </button>
                        </span>
                    ) : (
                        <label className={style.dottedBorder}>
                            <input
                                type="file"
                                onChange={(e) => handleFileSelect(e)}
                                required
                                accept="video/*"
                            />
                            <AiOutlineCloudUpload />
                            <h5>Select A Video</h5>
                            <p>MP4 file size no more than 10MB</p>
                        </label>
                    )}
                </div>
            ) : (
                thumbnailUrl != null && (
                    <div className={style.container}>
                        <div className={style.thumbnailContainer}>
                            {" "}
                            <Image
                                src={thumbnailUrl}
                                layout="fill"
                                alt="Image thumbnail"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                )
            )}
        </>
    );
}
