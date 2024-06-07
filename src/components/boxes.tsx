export const Boxes = ({ value }: { value: string | Array<string> }) => {
  return Array.isArray(value) ? (
    <div className="flex justify-center items-center gap-4 mt-7 ">
      {value.map((color, index) => (
        <Box color={color} key={index} />
      ))}
    </div>
  ) : (
    <Box color={value} />
  );
};

const Box = ({ color }: { color: string }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <div
        className="p-2 rounded-md w-16 h-8 xs:w-20 sm:w-24 lg:w-32 lg:h-10  2xl:w-48 select-none "
        style={{ backgroundColor: color }}
      ></div>
      <p className="text-xs font-semibold dark:text-neutral-200 text-neutral-500">
        {color}
      </p>
    </div>
  );
};
