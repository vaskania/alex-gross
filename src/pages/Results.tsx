import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { AppContext } from "../context/App.context";
import classes from "../styles/result.module.css";

export const Result = () => {
  const ctx = useContext(AppContext);
  const navigate = useNavigate();
  const calculateResult = () => {
    const score = ctx?.selectedAnswers.selected.reduce(
      (pre, curr) => pre + curr.point,
      0
    );
    return Math.round((score as number) / 0.16);
  };

  return (
    <section className={classes.result}>
      <p>RESULT</p>
      <h1>Your Score</h1>
      <p>{ctx?.name.name}</p>
      <h1>{calculateResult()}</h1>
      <span>points</span>
      <div className={classes.bar}>
        <div
          style={{
            width: `${calculateResult()}%`,
          }}
        ></div>
      </div>
      <Button
        label="Start New"
        size={10}
        onClick={() => {
          ctx?.selectedAnswers.reset();
          navigate("/");
        }}
      />
    </section>
  );
};
