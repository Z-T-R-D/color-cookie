import { create } from "zustand";

type Store = {
  isChecked: boolean;
  darkMode: boolean;
  toggle: () => void;
  toggleDarkMode: () => void;
};

const AddDarkMode = () => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.classList.toggle("dark");
  }
};

export const useStore = create<Store>((set) => ({
  isChecked: false,
  darkMode: true,
  toggle: () => set((state) => ({ isChecked: !state.isChecked })),
  toggleDarkMode: () =>
    set((state) => {
      AddDarkMode();
      return { darkMode: !state.darkMode };
    }),
}));
