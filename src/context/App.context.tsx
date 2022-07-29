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
}

export const AppContext = createContext<IAppContext | null>(null);

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [name, setName] = useState<string>("");

  const context = {
    name: {
      name,
      setName,
    },
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
