import { useState } from "react";

export const SlideToggler = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="relative select-none">
      <input
        type="checkbox"
        id="ball"
        checked={isChecked}
        onChange={handleToggle}
        className={`absolute left-0.5 top-0.5  w-4 sm:w-5 aspect-square rounded-full appearance-none cursor-pointer shadow-sm transition duration-500 ease-in-out ${
          isChecked
            ? "bg-blue-500 transform translate-x-7 sm:translate-x-10"
            : "bg-white "
        }`}
      />
      <label
        htmlFor="toggle"
        className="toggle-label block overflow-hidden w-12 h-5 sm:w-16 sm:h-6 rounded-full cursor-default bg-neutral-200 shadow-inner select-none"
      ></label>
    </div>
  );
};
