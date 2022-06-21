import { createContext, useState } from "react";
import generate, { Combinations } from "../colorConverter";
// types
type PropType = {
  children: React.ReactNode;
};

type ContextType = {
  colors: Combinations;
  setColors: (params: string) => void;
  setDisplay: (params: boolean) => void;
  display: boolean;
};
// initial state
const initialState: Combinations = {
  mainColor: ["#000"],
  complimentary: ["#0000", "#fff"],
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
export function ColorProvider(props: PropType) {
  const [Colors, setColors] = useState(initialState);
  const [Display, setDisplay] = useState(false);
  const handleSetColor = (params?: string) => {
    let colors = generate(params);
    setColors(colors);
    document.documentElement.style.setProperty(
      "--primary-clr",
      colors.mainColor[0]
    );
    !Display && setDisplay(true);
  };
  const handleDisplay = (params: boolean) => {
    setDisplay(params);
  };
  return (
    <ColorContext.Provider
      value={{
        colors: Colors,
        setColors: handleSetColor,
        display: Display,
        setDisplay: handleDisplay,
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
}

export default ColorContext;
