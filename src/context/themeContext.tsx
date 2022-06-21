import { createContext, useState } from "react";

// setting types
type ContextType = {
  active: boolean;
  setActive?: () => void;
};
// setting initial state
const initialState = false;

const ThemeCtx = createContext<ContextType>({ active: initialState });

export function ThemeProvider(prop: { children: React.ReactNode }) {
  const [Active, setActive] = useState(initialState);
  const handleActive = () => {
    let root = document.querySelector("html")!;
    Active ? setActive(false) : setActive(true);
    Active ? root.classList.remove("dark") : root.classList.add("dark");
  };
  return (
    <ThemeCtx.Provider value={{ active: Active, setActive: handleActive }}>
      {prop.children}
    </ThemeCtx.Provider>
  );
}

export default ThemeCtx;
