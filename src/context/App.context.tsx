import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

interface IAppContext {
  name: {
    name: string;
    setName: Dispatch<SetStateAction<string>>;
  };
  point: {
    point: number;
    setPoint: Dispatch<SetStateAction<number>>;
  };
  selectedAnswers: {
    selected: Array<{
      value: string;
      point: number;
    }>;
    setAnswers: (answer: {
      value: string;
      type: string;
      point: number;
    }) => void;
  };
}

export const AppContext = createContext<IAppContext | null>(null);

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [name, setName] = useState<string>("");
  const [point, setPoint] = useState<number>(0);
  const [selected, setSelected] = useState<
    Array<{
      value: string;
      point: number;
      type: string;
    }>
  >([]);

  const setAnswers = (answer: {
    value: string;
    point: number;
    type: string;
  }) => {
    if (answer.type === "dropdown" || answer.type == "select") {
      setSelected((s) => [...s.filter((e) => e.type !== answer.type)]);
    }

    if (selected.find((a) => a.value === answer.value)) {
      return setSelected((e) => e.filter((s) => s.value !== answer.value));
    }

    setSelected((e) => [...e, { ...answer }]);
  };

  const context: IAppContext = {
    name: {
      name,
      setName,
    },
    point: {
      point,
      setPoint,
    },
    selectedAnswers: {
      selected,
      setAnswers,
    },
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
