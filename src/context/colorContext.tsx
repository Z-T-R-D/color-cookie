import { createContext, useState } from "react";
import generate, { Combinations } from "../colorConverter";

type PropType = {
  children: React.ReactNode;
};

type ContextType = {
  colors: Combinations;
  setColors: (params: string) => void;
  display: boolean;
};

const initialState: Combinations = {
  mainColor: ["#000"],
  complimentary: ["#0000", "#fff"],
  splitComplimentary: ["#000", "#000", "#fff"],
  triad: ["#000", "#fff", "#000", "#001"],
  tetrad: ["#000", "#fff", "#000", "#001", "#000"],
};

const ColorContext = createContext<ContextType>({
  colors: initialState,
  setColors: (e) => e,
  display: false,
});

export function ColorProvider(props: PropType) {
  const [Colors, setColors] = useState(initialState);
  const [Display, setDisplay] = useState(false);
  const handleSetColor = (params: string) => {
    let colors = generate(params);
    setColors(colors);
    document.documentElement.style.setProperty(
      "--primary-clr",
      colors.mainColor[0]
    );
    !Display && setDisplay(true);
  };
  return (
    <ColorContext.Provider
      value={{ colors: Colors, setColors: handleSetColor, display: Display }}
    >
      {props.children}
    </ColorContext.Provider>
  );
}

export default ColorContext;
