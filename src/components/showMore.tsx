import { useStore } from "../context/store";

export const ShowMore = () => {
  const onShow = useStore((state) => state.onShow);
  const show = useStore((state) => state.show);
  const currentColor = useStore((state) => state.currentColor);

  const handleClick = () => {
    if (currentColor !== "") {
      onShow();
    }
  };
  return (
    <div
      className="absolute right-2 top-[150px] cursor-pointer dark:bg-neutral-900 p-3 rounded-full dark:active:bg-transparent bg-neutral-50 select-none"
      style={{ color: currentColor, display: show ? "none" : "block" }}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 transform -rotate-90 "
      >
        <path d="M12 5v14M19 12l-7 7-7-7"></path>
      </svg>
    </div>
  );
};
