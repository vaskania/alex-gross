import { Check } from "phosphor-react";
import { useState } from "react";
import classes from "../styles/radio.module.css";
type RadionButtonType = "single" | "multi";

interface IRadionButton {
  type: RadionButtonType;
  data: {
    label: string;
    value: string;
  }[];
}

const Item = ({
  label,
  click,
  value,
  isCurrent,
}: {
  value: string;
  label: string;
  click: any;
  isCurrent: boolean;
}) => {
  const [isChecked, setChecked] = useState<boolean>(isCurrent);

  return (
    <div key={value} className={classes.checkboxItem}>
      <span
        onClick={() => {
          click();
          setChecked((c) => !c);
        }}
        className={isChecked && isCurrent ? classes.checked : ""}
      >
        {isCurrent && isChecked && <Check />}
      </span>
      <span>{label}</span>
    </div>
  );
};

export const RadioButtons = ({ data, type }: IRadionButton) => {
  const [current, setCurrent] = useState("ger");

  return (
    <section className={classes.container}>
      {data.map(({ label, value }) => (
        <Item
          key={value}
          label={label}
          value={value}
          isCurrent={value === current}
          click={() => setCurrent(value)}
        />
      ))}
    </section>
  );
};
