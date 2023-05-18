import { useContext } from "react";

import { Button } from "@components/Elements/Buttons/Buttons";
//context
import { ManagedUI } from "@contexts/ManagedUI";

export default function Home() {
    const { setOpenModal, setModalComp } = useContext(ManagedUI);
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,20rem)",
            }}
        >
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
                            <div>
                                <h1>Modal</h1>
                            </div>
                        );
                    }}
                />
            </div>
        </div>
    );
}
