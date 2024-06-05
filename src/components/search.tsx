import { ReactSVG } from "react-svg";
import Icon from "../assets/search.svg";
import { useState } from "react";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = (event: React.FormEvent)  => {
    event.preventDefault();
    if (!searchValue) return;
    console.log("searching for", searchValue);
    setSearchValue("");
  };

  const containerClasses =
    "group flex items-center justify-center focus-within:ring-blue-500 p-2 border-2 border-neutral-300 rounded-md focus-within:ring-2 focus-within:border-transparent w-4/5 sm:w-[450px] bg-white z-10 dark:border-white ";
  const inputClasses =
    "focus:outline-none text-md text-neutral-900 placeholder-neutral-200 font-semibold pr-2 pl-1 w-full bg-transparent dark:placeholder-neutral-400 ";
  const svgClasses = `text-neutral-400 w-6 cursor-pointer group-focus-within:text-blue-500 ${
    searchValue ? "active:text-neutral-200" : "text-neutral-200"
  }`;

  return (
    <form onSubmit={handleSearch} className={containerClasses}>
      <input
        type="search"
        placeholder=" search color name or hex"
        className={inputClasses}
        value={searchValue}
        onChange={handleInputChange}
      />
      <ReactSVG src={Icon} className={svgClasses} onClick={handleSearch} />
    </form>
  );
};
