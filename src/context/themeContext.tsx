import { createContext, useState, useMemo } from "react";

// setting type
type ContextType = {
  active: boolean;
  setActive?: () => void;
};
// setting initial state
const initialState = {
  active: false,
};

// create and initialize state
const ThemeCtx = createContext<ContextType>(initialState);

// create and initialize provider
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setDark] = useState(false);
  // set darktheme state
  const setActive = () => {
    setDark(!isDark);
  };
  // set darkthemw on click
  useMemo(() => {
    let root = document.querySelector("html")!;
    isDark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [isDark]);
  return (
    <ThemeCtx.Provider value={{ active: isDark, setActive }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export default ThemeCtx;
