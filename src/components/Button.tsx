import { ArrowCircleRight, ArrowLeft } from "phosphor-react";
import { MouseEventHandler } from "react";
import classes from "../styles/button.module.css";

interface IButton {
  label: string;
  rightArrow?: boolean;
  leftArrow?: boolean;
  size: number;
  transparent?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const Button = ({
  label,
  rightArrow,
  leftArrow,
  size,
  transparent,
  onClick,
  disabled,
}: IButton) => (
  <button
    onClick={onClick}
    className={[classes.button, disabled && classes.disabled].join(" ")}
    disabled={disabled}
    style={{
      width: `${size}rem`,
      background: `${transparent && "transparent"}`,
      color: `${transparent && "#fff"}`,
      justifyContent: `${transparent && "center"}`,
      gap: "10px",
    }}
  >
    {leftArrow && <ArrowLeft />} {label}{" "}
    {rightArrow && <ArrowCircleRight size={22} />}{" "}
  </button>
);
