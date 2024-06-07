import { ReactSVG } from "react-svg";
import Icon from "../assets/search.svg";
import { useMemo, useState } from "react";
import { ColorConverter } from "../core/colorConverter";
import { useStore } from "../context/store";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const addTriad = useStore((state) => state.addTriad);
  const addTetrad = useStore((state) => state.addTetrad);
  const addShades = useStore((state) => state.addShades);
  const errorMessage = useStore((state) => state.errorMessage);
  const currentColor = useStore((state) => state.currentColor);
  const addCurrentColor = useStore((state) => state.addCurrentColor);
  const addErrorMessage = useStore((state) => state.addErrorMessage);
  const addComplimentaryColors = useStore((state) => state.addComplimentary);
  const addSplitComplementary = useStore(
    (state) => state.addSplitComplementary
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const checkColor = (searchValue: string) => {
    const color = new ColorConverter(searchValue);
    const currentColor = color.color;
    // const isBaseColor = ["white", "#fff", "#ffffff", "black", "#000", "#000000"].includes(color.color);
    addCurrentColor(currentColor);
    addComplimentaryColors(color.complimentary);
    addSplitComplementary(color.splitComplementary);
    addTriad(color.triad);
    addTetrad(color.tetrad);
    addShades(color.shades);
    addErrorMessage(color.ErrorMessage);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    setSearchValue("");
    checkColor(searchValue);
  };

  const errorMessageStyle: React.CSSProperties = useMemo(
    () => ({
      visibility: errorMessage ? "visible" : "hidden",
    }),
    [errorMessage]
  );

  return (
    <div className="w-full flex flex-col justify-center items-center z-10">
      <p
        className={`text-red-500 font-semibold text-sm w-4/5 sm:w-[450px] p-1 px-2`}
        style={errorMessageStyle}
      >
        {errorMessage}
      </p>
      <form
        onSubmit={handleSearch}
        className="group flex items-center justify-center border-2 p-0.5 border-neutral-300 rounded-md w-4/5 sm:w-[450px] bg-white dark:bg-neutral-800 dark:border-neutral-500 z-10"
      >
        <input
          type="search"
          placeholder="search color like red or #fff"
          className="focus:outline-none text-md text-neutral-900 placeholder-neutral-300 font-semibold w-full bg-transparent dark:text-neutral-100 dark:placeholder-neutral-600 p-2 group-focus-within:caret-blue-500"
          value={searchValue}
          onChange={handleInputChange}
          style={{ caretColor: currentColor }}
        />
        <ReactSVG
          src={Icon}
          className="w-10 aspect-square p-2 cursor-pointer text-blue-500 active:text-neutral-500 shadow-sm bg-neutral-200 dark:bg-neutral-700 active:bg-transparent dark:active:bg-transparent"
          onClick={handleSearch}
          style={{ color: currentColor }}
        />
      </form>
    </div>
  );
};
