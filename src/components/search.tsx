import { ReactSVG } from "react-svg";
import Icon from "../assets/search.svg";
import { useState } from "react";
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
    if (
      currentColor === "white" ||
      currentColor === "#fff" ||
      currentColor === "#ffffff" ||
      currentColor === "black" ||
      currentColor === "#000" ||
      currentColor === "#000000"
    ) {
      addComplimentaryColors(color.complimentary);
      addShades(color.shades);
      addSplitComplementary(color.splitComplementary);
    } else {
      addComplimentaryColors(color.complimentary);
      addSplitComplementary(color.splitComplementary);
      addShades(color.shades);
      addTriad(color.triad);
      addTetrad(color.tetrad);
    }
    addCurrentColor(currentColor);
    addErrorMessage(color.ErrorMessage);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    setSearchValue("");
    checkColor(searchValue);
  };

  return (
    <div className=" w-full flex flex-col justify-center items-center z-10 ">
      <p
        className={`text-red-500 font-semibold text-sm w-4/5 sm:w-[450px] p-1 px-2 ${
          errorMessage ? "visible" : "hidden"
        }`}
      >
        {errorMessage}
      </p>
      <form
        onSubmit={handleSearch}
        className={
          "group flex items-center justify-center border-2 p-0.5 border-neutral-300 rounded-md w-4/5 sm:w-[450px] bg-white dark:bg-neutral-800 dark:border-neutral-500  z-10 "
        }
      >
        <input
          type="search"
          placeholder=" search color like red or #fff"
          className={
            "focus:outline-none text-md text-neutral-900 placeholder-neutral-300 font-semibold w-full bg-transparent dark:text-neutral-100 dark:placeholder-neutral-600 p-2 group-focus-within:caret-blue-500"
          }
          value={searchValue}
          onChange={handleInputChange}
          style={{ caretColor: currentColor }}
        />
        <ReactSVG
          src={Icon}
          className={` w-10 aspect-square p-2 cursor-pointer text-blue-500 active:text-neutral-500 shadow-sm bg-neutral-200  dark:bg-neutral-700  active:bg-transparent dark:active:bg-transparent `}
          onClick={handleSearch}
          style={{ color: currentColor }}
        />
      </form>
    </div>
  );
};
