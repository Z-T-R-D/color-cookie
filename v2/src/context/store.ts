import { create } from "zustand";

type ColorScheme = string[];
type Complimentary = ColorScheme & { length: 2 };
type Triad = ColorScheme & { length: 3 };
type SplitComplementary = ColorScheme & { length: 3 };
type Tetrad = ColorScheme & { length: 4 };
type Shades = ColorScheme & { length: 5 };

type Store = {
  show: boolean;
  triad: Triad;
  tetrad: Tetrad;
  shades: Shades;
  darkMode: boolean;
  currentColor: string;
  errorMessage: string;
  complimentary: Complimentary;
  splitComplementary: SplitComplementary;
  onShow: () => void;
  offShow: () => void;
  toggleDarkMode: () => void;
  addTriad: (colors: Triad) => void;
  addTetrad: (colors: Tetrad) => void;
  addShades: (colors: Shades) => void;
  addErrorMessage: (msg: string) => void;
  addCurrentColor: (color: string) => void;
  addComplimentary: (colors: Complimentary) => void;
  addSplitComplementary: (colors: SplitComplementary) => void;
};

// add dark mode to the root element
const AddDarkModeToRoot = () => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.classList.toggle("dark");
  }
};

export const useStore = create<Store>((set) => ({
  darkMode: false,
  errorMessage: "",
  show: false,
  currentColor: "",
  triad: ["", "", ""],
  complimentary: ["", ""],
  tetrad: ["", "", "", ""],
  shades: ["", "", "", "", ""],
  splitComplementary: ["", "", ""],
  onShow: () => set(() => ({ show: true })),
  offShow: () => set(() => ({ show: false })),
  addErrorMessage: (msg: string) => set(() => ({ errorMessage: msg })),
  addCurrentColor: (color: string) => set(() => ({ currentColor: color })),
  addTriad: (colors: Triad) => set(() => ({ triad: colors })),
  addTetrad: (colors: Tetrad) => set(() => ({ tetrad: colors })),
  addShades: (colors: Shades) => set(() => ({ shades: colors })),
  addSplitComplementary: (colors: SplitComplementary) =>
    set(() => ({ splitComplementary: colors })),
  addComplimentary: (colors: Complimentary) =>
    set(() => ({ complimentary: colors })),
  toggleDarkMode: () =>
    set((state) => {
      AddDarkModeToRoot();
      return { darkMode: !state.darkMode };
    }),
}));
