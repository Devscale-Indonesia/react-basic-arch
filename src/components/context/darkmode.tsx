import React, { createContext, useState } from "react";

interface IDarkModeContext {
  onDarkMode: boolean;
  setOnDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeContext = createContext<IDarkModeContext>({
  onDarkMode: false,
  setOnDarkMode: () => {},
});

export const DarkModeProvider = ({ children }: React.PropsWithChildren) => {
  const [onDarkMode, setOnDarkMode] = useState(false);

  return <DarkModeContext.Provider value={{ onDarkMode, setOnDarkMode }}>{children}</DarkModeContext.Provider>;
};
