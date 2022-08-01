import classes from "../styles/tracker.module.css";

export const Tracker = ({
  total,
  current,
}: {
  total: number;
  current: number;
}) => {
  const calculatePercentage = () => Math.round((current / total) * 100);

  return (
    <div className={classes.trackerContainer}>
      <p>
        QUESTION {current} OUT OF {total}
      </p>
      <div className={classes.tracker}>
        <div
          style={{
            width: `${calculatePercentage()}%`,
          }}
        ></div>
      </div>
    </div>
  );
};
