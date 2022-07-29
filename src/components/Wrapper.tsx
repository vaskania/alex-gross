import { PropsWithChildren } from "react";
import classes from "../styles/wrapper.module.css";

export const Wrapper = ({ children }: PropsWithChildren) => (
  <div className={classes.wrapper}>{children}</div>
);
