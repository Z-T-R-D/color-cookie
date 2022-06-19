import Header from "./components/layout/header";
import MainView from "./components/layout/mainView";
import GlobalStyle from "./components/style/global.styled";
type colorsType = { primary: string; secondary: string };
type activeProp = "light" | "dark";

type themeType = {
  light: colorsType;
  dark: colorsType;
  active: (e: activeProp) => colorsType;
};
const theme: themeType = {
  light: {
    primary: "red",
    secondary: "blue",
  },
  dark: {
    primary: "blue",
    secondary: "red",
  },
  active: (e) => (e === "light" ? theme.light : theme.dark),
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main className="App">
        <MainView />
      </main>
    </>
  );
}

export default App;
