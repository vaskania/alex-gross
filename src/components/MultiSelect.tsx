import { FormEventHandler } from "react";
import { Answer } from "../components/Question";
import classes from "../styles/checkbox.module.css";

interface ISelect {
  data: Answer[];
  onChange: FormEventHandler<HTMLDivElement>;
}

export const MultiSelect = ({ data, onChange }: ISelect) => {
  return (
    <div className={classes.checkboxContainer} onChange={onChange}>
      {data.map(({ label, value }) => (
        <label className={classes.container} key={label}>
          {label}
          <input value={value} name="survey" type="checkbox" />
          <span
            className={[classes.checkmark, classes.checkmarkSquare].join(" ")}
          ></span>
        </label>
      ))}
    </div>
  );
};
