import { create } from "zustand";

type ComplimentaryColors = [string, string];

type Store = {
  currentColor: string;
  complimentaryColors: ComplimentaryColors;
  darkMode: boolean;
  errorMessage: string;
  show: boolean;
  toggleShow: () => void;
  addErrorMessage: (msg: string) => void;
  addCurrentColor: (clr: string) => void;
  addComplimentaryColors: (clrs: ComplimentaryColors) => void;
  toggleDarkMode: () => void;
};

// add dark mode to the root element
const AddDarkModeToRoot = () => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.classList.toggle("dark");
  }
};

export const useStore = create<Store>((set) => ({
  currentColor: "",
  complimentaryColors: ["", ""],
  darkMode: false,
  errorMessage: "",
  show: false,
  toggleShow: () => set((state) => ({ show: !state.show })),
  addErrorMessage: (msg: string) => set(() => ({ errorMessage: msg })),
  addCurrentColor: (clr: string) => set(() => ({ currentColor: clr })),
  addComplimentaryColors: (clrs: ComplimentaryColors) =>
    set(() => ({ complimentaryColors: clrs })),
  toggleDarkMode: () =>
    set((state) => {
      AddDarkModeToRoot();
      return { darkMode: !state.darkMode };
    }),
}));
