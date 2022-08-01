import {ChangeEventHandler, HTMLInputTypeAttribute} from "react";
import classes from "../styles/input.module.css";

interface IInput {
    onChange: ChangeEventHandler<HTMLInputElement>;
    type: HTMLInputTypeAttribute;
    placeholder: string;
}

export const Input = (props: IInput) => {
    return <input className={classes.input} {...props} />;
};
