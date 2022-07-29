import { useContext } from "react";
import { AppContext } from "./context/App.context";

export const Test = () => {
  const ctx = useContext(AppContext);

  return (
    <>
      <h1>{ctx?.name.name}</h1>
      <button
        onClick={() => {
          ctx?.name.setName("miqela");
        }}
      >
        mevida
      </button>
    </>
  );
};
