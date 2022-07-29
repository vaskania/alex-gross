import { useState } from "react";
import classes from "../styles/dropdown.module.css";
import { Triagle } from "./Triagle";

interface IDropdown {
  label: string;
  value: string;
}

export const Dropdown = ({ data }: { data: IDropdown[] }) => {
  const [open, setOpen] = useState<boolean>(false);
  const notSelectedTesxt = "please choose your country";
  const [selected, setSelected] = useState<string>(notSelectedTesxt);

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
              <span key={value} onClick={() => setSelected(value)}>
                {label}
              </span>
            );
          })}
        </div>
      )}
    </section>
  );
};
