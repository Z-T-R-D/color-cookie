import { createContext, useState, useEffect, useMemo } from "react";
import generate, { Combinations } from "../core/colorConverter";

type ContextType = {
  colors: Combinations;
  setColors: (params: string) => void;
  setDisplay: (params: boolean) => void;
  display: boolean;
};
// initial state
const initialState: Combinations = {
  mainColor: ["#000"],
  complimentary: ["#000", "#fff"],
  splitComplimentary: ["#000", "#000", "#fff"],
  triad: ["#000", "#fff", "#000", "#001"],
  tetrad: ["#000", "#fff", "#000", "#001", "#000"],
};
// create context and initialize
const ColorContext = createContext<ContextType>({
  colors: initialState,
  setColors: (e) => e,
  display: false,
  setDisplay: (e) => e,
});

// create and export provider
export function ColorProvider({ children }: { children: React.ReactNode }) {
  const [colors, setStateColors] = useState<Combinations>(initialState);
  const [display, setDisplayState] = useState(false);
  const [isFirst, setFirst] = useState(false);

  // set colors state
  const setColors = (params: string) => {
    setStateColors((prevState) => ({
      ...prevState,
      ...generate(params),
    }));

    !display && setDisplayState(true);
  };
  const setDisplay = (params: boolean) => {
    setDisplayState(params);
  };
  // // generare new color on load and reload
  useEffect(() => {
    setStateColors((prevState) => ({
      ...prevState,
      ...generate(""),
    }));
    document.documentElement.style.setProperty(
      "--primary-clr",
      generate("").mainColor[0]
    );
  }, []);
  // generare new color on click
  useMemo(() => {
    if (isFirst) {
      document.documentElement.style.setProperty(
        "--primary-clr",
        generate("").mainColor[0]
      );
      setFirst(true);
    } else {
      document.documentElement.style.setProperty(
        "--primary-clr",
        colors.mainColor[0]
      );
    }
  }, [colors]);
  return (
    <ColorContext.Provider
      value={{
        colors,
        setColors,
        display,
        setDisplay,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
}

export default ColorContext;
