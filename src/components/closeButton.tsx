import { useStore } from "../context/store";

export const CloseButton = () => {
    const offShow = useStore((state) => state.offShow);

  return (
    <div className="absolute top-0 right-0 text-xs dark:text-neutral-200 text-neutral-500 mr-1 mt-0.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4  m-1  cursor-pointer text-red-400"
        onClick={offShow}
      >
        <path d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </div>
  );
};
