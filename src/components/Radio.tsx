import { FormEventHandler } from "react";
import { Answer } from "../components/Question";
import classes from "../styles/checkbox.module.css";

interface ISelect {
  data: Answer[];
  onChange: FormEventHandler<HTMLDivElement>;
}

export const Select = ({ data, onChange }: ISelect) => {
  return (
    <div className={classes.checkboxContainer} onChange={onChange}>
      {data.map(({ label, value }) => (
        <label className={classes.container} key={label}>
          {label}
          <input value={value} name="survey" type="radio" />
          <span className={classes.checkmark}></span>
        </label>
      ))}
    </div>
  );
};
