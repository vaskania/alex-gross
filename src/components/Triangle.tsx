export const Triangle = ({ rotate }: { rotate: boolean }) => {
  return (
    <div
      style={{
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "0 7px 7px 7px",
        borderColor: "transparent transparent #fff transparent",
        transform: `${rotate ? "rotate(180deg)" : "rotate(0deg)"}`,
      }}
    ></div>
  );
};
