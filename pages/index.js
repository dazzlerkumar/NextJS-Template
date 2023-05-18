import { useContext, useState } from "react";

import TimeSpinner from "@components/Elements/TimeSpinner";
//Selects
import {
    SimpleSelect,
    MultiSelect,
} from "@components/Elements/SelectField/SelectField";
import { Button } from "@components/Elements/Buttons/Buttons";
import LoadingScreen from "@components/Elements/LoadingScreen";
import LoadingSpinner from "@components/Elements/LoadingSpinner";

//context
import { ManagedUI } from "@contexts/ManagedUI";
export default function Home() {
    const { setOpenModal, setModalComp } = useContext(ManagedUI);
    const [data, setData] = useState({
        multiSelection: [],
    });
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
            }}
        >
            <h3>Buttons</h3>
            <div
                style={{
                    display: "flex",
                    margin: "1rem",
                    alignItems: "center",
                }}
            >
                <Button text="PRIMARY" />
                <Button text="DISABLED" disabled={true}/>
                <Button theme="light" text="SECONDARY" />
                <Button theme="text" text="Tertiary" />
                <Button theme="add" text="CUSTOM" />
            </div>
            <h3>Spinners</h3>
            <div
                style={{
                    display: "flex",
                    margin: "1rem",
                    alignItems: "center",
                }}
            >
                <TimeSpinner />
            </div>
            <h3>Custom Selects</h3>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "12rem 12rem 12rem",
                    gap: "1rem",
                    margin: "1rem",
                    alignItems: "center",
                }}
            >
                <div>
                    <p>Simple Select</p>
                    <SimpleSelect />
                </div>
                <div>
                    <p>Multi Select</p>
                    <MultiSelect
                        selected={data.multiSelection}
                        setselected={(values) => {
                            setData({
                                ...data,
                                multiSelection: values,
                            });
                        }}
                    />
                </div>
            </div>
            <h3>Loading Components</h3>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1rem 1fr",
                    gap: "2.5rem",
                    margin: "1rem",
                    alignItems: "center",
                    height: "5rem",
                    width: "40rem",
                }}
            >
                <LoadingScreen />
                <div
                    style={{
                        display: "grid",
                        placeItems: "center",
                        borderLeft: "1px solid seagreen",
                        height: "100%",
                        padding: "0 2rem",
                    }}
                >
                    <LoadingSpinner />
                </div>
            </div>
            <h3>Modal</h3>
            <div
                style={{
                    display: "flex",
                    margin: "1rem",
                    alignItems: "center",
                }}
            >
                <Button
                    text="Show Modal"
                    onClick={() => {
                        setOpenModal(true);
                        setModalComp(
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    justifySelf: "center",
                                    alignSelf: "center",
                                    backgroundColor: "#fff",
                                    borderRadius: "5px",
                                    width: "15rem",
                                    aspectRatio: "1",
                                }}
                            >
                                <h1>Modal</h1>
                            </div>
                        );
                    }}
                />
            </div>
        </div>
    );
}
