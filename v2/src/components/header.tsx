import { useStore } from "../context/store";
import { SlideToggler } from "./slideToggler";

export const Header = () => {
  const currentColor = useStore((state) => state.currentColor);
  return (
    <header className=" flex justify-between shadow-md p-5 items-center align-middle bg-white dark:bg-black border-b-2 border-neutral-200 dark:border-neutral-700">
      <div className="mb-2 flex flex-col justify-start items-baseline place-content-baseline cursor-default ">
        <h1
          className="text-2xl lg:text-3xl font-bold uppercase text-blue-500 tracking-wider"
          style={{ color: currentColor }}
        >
          color cookie
        </h1>
        <p className="text-[0.8rem] lg:text-md m-[-5px] italic lg:tracking-widest font-semibold text-neutral-300 dark:text-neutral-700 pl-3">
          a fun color generator app
        </p>
      </div>
      <SlideToggler />
    </header>
  );
};
