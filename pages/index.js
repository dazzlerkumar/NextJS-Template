import { Button } from "@components/Elements/Buttons/Buttons";
import Radio from "@components/Elements/Radio";
import RadioGroup from "@components/Elements/Radio/group";
import { SimpleSelect } from "@components/Elements/SelectField/SelectField";
import TimeSpinner from "@components/Elements/TimeSpinner";
export default function Home() {
    return (
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,20rem)"}}>
            main page
            <div
                style={{
                    display: "flex",
                    margin: "1rem",
                    alignItems: "center",
                }}
            >
                <Button text="PRIMARY" />
                <Button theme="light" text="SECONDARY" />
                <Button theme="text" text="Tertiary" />
                <Button theme="add" text="CUSTOM" />
            </div>
            <RadioGroup name="radios">
                <Radio name="radios" label="A" />
                <Radio name="radios" />
            </RadioGroup>
            <SimpleSelect />
            <TimeSpinner/>
        </div>
    );
}
