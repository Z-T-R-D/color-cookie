import { Background } from "./components/bg";
import { Search } from "./components/search";
import { Header } from "./components/header";
import { useEffect } from "react";
import { useStore } from "./context/store";
import { Boxes } from "./components/boxes";
import { CloseButton } from "./components/closeButton";
import { ShowMore } from "./components/showMore";

function App() {
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);
  const show = useStore((state) => state.show);
  const currentColor = useStore((state) => state.currentColor);
  const shades = useStore((state) => state.shades);
  const triadColors = useStore((state) => state.triad);
  const tetradColors = useStore((state) => state.tetrad);
  const complimentaryColors = useStore((state) => state.complimentary);
  const splitComplimentary = useStore((state) => state.splitComplementary);

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return () => {
      if (darkMode) {
        toggleDarkMode();
      }
    };
  }, []);

  return (
    <>
      <Header />
      <main className=" p-4 mt-[0.5px] dark:mt-0 h-full bg-white dark:bg-black">
        <section
          className="flex justify-center items-center relative overflow-hidden w-full h-full"
          style={{ height: show ? "fit-content" : "100%" }}
        >
          <Background />
          <Search />
          <ShowMore />
        </section>
        <section
          className="h-fit bg-neutral-50 dark:bg-neutral-950 my-4 p-5 rounded-md flex justify-center items-center flex-col relative"
          style={{ display: show ? "block" : "none" }}
        >
          <CloseButton />
          <Boxes value={currentColor} />
          <Boxes value={complimentaryColors} />
          <Boxes value={triadColors} />
          <Boxes value={splitComplimentary} />
          <Boxes value={tetradColors} />
          <Boxes value={shades} />
        </section>
      </main>
    </>
  );
}

export default App;
