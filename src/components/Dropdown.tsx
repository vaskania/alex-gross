import { useState } from "react";
import classes from "../styles/dropdown.module.css";
import { Triagle } from "./Triagle";

interface IDropdown {
  data: {
    label: string;
    value: string;
  }[];
  change: (e: any) => void;
}

export const Dropdown = ({ data, change }: IDropdown) => {
  const [open, setOpen] = useState<boolean>(false);
  const notSelectedTesxt = "please choose your country";

  return (
    <section className={classes.dropdownContainer}>
      <div
        className={classes.dropdown}
        onClick={() => setOpen((open) => !open)}
      >
        <p>{notSelectedTesxt}</p>
        <Triagle rotate={open} />
      </div>
      {open && (
        <div className={classes.options}>
          {data.map(({ label, value }) => {
            return (
              <option
                key={value}
                style={{
                  padding: "10px 0",
                  cursor: "pointer",
                }}
                onClick={(e: any) => console.log(e.target.value)}
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
