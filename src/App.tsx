import { Background } from "./components/bg";
import { Search } from "./components/search";
import { Header } from "./components/header";
import { useEffect } from "react";
import { useStore } from "./context/store";

function App() {
  const toggleDarkMode = useStore(state => state.toggleDarkMode);
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
        <section className="flex justify-center items-center relative overflow-hidden h-full w-full">
          <Background />
          <Search />
        </section>  
      </main>
    </>
  );
}

export default App;
