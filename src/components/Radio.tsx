import { ChangeEventHandler } from "react";
import classes from "../styles/checkbox.module.css";

interface IRadio {
  data: {
    label: string;
    value: string;
  }[];
  onChange: ChangeEventHandler<any>;
}

export const Radio = ({ data, onChange }: IRadio) => {
  return (
    <div className={classes.checkboxContainer} onChange={onChange}>
      {data.map(({ label, value }) => (
        <label className={classes.container}>
          {label}
          <input type="radio" value={value} name="survey" />
          <span className={classes.checkmark}></span>
        </label>
      ))}
    </div>
  );
};
