import { createContext, useContext, ReactNode } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => useContext(AppContext);
