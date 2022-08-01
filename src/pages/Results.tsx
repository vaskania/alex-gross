import { useContext } from "react";
import { AppContext } from "../context/App.context";
import classes from "../styles/result.module.css";

export const Result = () => {
  const ctx = useContext(AppContext);

  const calculateResult = () => {
    const score = ctx?.selectedAnswers.selected.reduce(
      (pre, curr) => pre + curr.point,
      0
    );
    return (score as number) / 0.16;
  };

  return (
    <section className={classes.result}>
      <p>RESULT</p>
      <h1>Your Score</h1>
      <p>{ctx?.name.name}</p>
      <h1>{calculateResult()}</h1>
      <div className={classes.bar}>
        <div
          style={{
            width: `${calculateResult()}%`,
          }}
        ></div>
      </div>
    </section>
  );
};
