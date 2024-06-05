import { Background } from "./components/bg";
import { Search } from "./components/search";
import { Header } from "./components/header";
import { useEffect } from "react";
import { useStore } from "./context/store";

function App() {
  const toggleDarkMode = useStore().toggleDarkMode;
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
      <main className="transition duration-500 ease-in p-4 mt-[0.5px] dark:mt-0 h-full bg-white dark:bg-black">
        <section className="flex justify-center items-center relative overflow-hidden h-full">
          <Background />
          <Search />
        </section>
      </main>
    </>
  );
}

export default App;
