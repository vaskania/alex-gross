import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import classes from "../styles/input.module.css";

interface Iinput {
  onChange: ChangeEventHandler<HTMLInputElement>;
  type: HTMLInputTypeAttribute;
  placeholder: string;
}

export const Input = (props: Iinput) => {
  return <input className={classes.input} {...props} />;
};
