// Box.tsx
export const Box = ({ color }: { color: string }) => (
  <div className="flex flex-col justify-center items-center mt-2">
    <div
      className="p-2 rounded-md w-16 h-8 xs:w-20 sm:w-24 lg:w-32 lg:h-10 2xl:w-48 select-none"
      style={{ backgroundColor: color }}
    ></div>
    <p className="text-xs font-semibold dark:text-neutral-200 text-neutral-500">
      {color}
    </p>
  </div>
);

// Boxes.tsx
export const Boxes = ({ value }: { value: string | Array<string> }) => {
  const renderBox = (color: string, index: number) => (
    <Box key={color + index} color={color} />
  );

  return (
    <div className="flex justify-center items-center gap-4 mt-7">
      {Array.isArray(value) ? value.filter(color => color).map(renderBox) : <Box color={value} />}
    </div>
  );
};