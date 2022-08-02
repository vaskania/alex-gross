import {useState} from "react";
import classes from "../styles/dropdown.module.css";
import {Triangle} from "./Triangle";

interface IDropdown {
    data: {
        label: string;
        value: string;
    }[];
    handleChange: (e: string) => void;
}

export const Dropdown = ({data, handleChange}: IDropdown) => {
    const [open, setOpen] = useState<boolean>(false);
    const notSelectedText = "please choose your country";
    const [current, setCurrent] = useState<string>(notSelectedText);

    const handleToggle = () => {
        setOpen(prevState => !prevState)
    }

    const handleClick = (e: any, label: string) => {
        handleChange(e.target.value);
        setCurrent(label);
        setOpen(false);
    }

    return (
        <section className={classes.dropdownContainer}>
            <div
                className={classes.dropdown}
                onClick={handleToggle}
            >
                <p>{current}</p>
                <Triangle rotate={open}/>
            </div>
            {open && (
                <div className={classes.options}>
                    {data.map(({label, value}) => {
                        return (
                            <option
                                key={value}
                                style={{
                                    padding: "10px 0",
                                    cursor: "pointer",
                                }}
                                onClick={(e) => handleClick(e, label)}
                                value={value}
                            >
                                {label}
                            </option>
                        );
                    })}
                </div>
            )}
        </section>
    );
};
