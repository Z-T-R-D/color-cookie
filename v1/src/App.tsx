import Header from "./components/layout/header";
import MainView from "./components/layout/mainView";
import SubView from "./components/layout/subView";
import GlobalStyle from "./components/style/global.styled";
import { ColorProvider } from "./context/colorContext";
import { ThemeProvider } from "./context/themeContext";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Header />
      <ColorProvider>
        <main>
          <MainView />
          <SubView />
        </main>
      </ColorProvider>
    </ThemeProvider>
  );
}

export default App;
