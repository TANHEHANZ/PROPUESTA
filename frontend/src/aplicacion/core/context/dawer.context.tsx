import { createContext, ReactNode, useState } from "react";
import {
  DrawerProps,
  DrawerProviderProps,
  DrawerState,
} from "../types/drawer.types";

export const DrawerContext = createContext<DrawerProps | undefined>(undefined);
export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [state, setState] = useState<DrawerState>({
    content: null,
    isVisible: false,
    title: "",
  });

  const toggle = () => {
    setState((prev) => ({
      ...prev,
      isVisible: !prev.isVisible,
    }));
  };
  const setContent = (content: ReactNode) => {
    setState((prev) => ({
      ...prev,
      content,
    }));
  };
  const setTitle = (title: string) => {
    setState((prev) => ({
      ...prev,
      title,
    }));
  };

  return (
    <DrawerContext.Provider
      value={{
        state,
        toggle,
        setContent,
        setTitle,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
