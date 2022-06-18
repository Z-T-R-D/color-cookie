import Header from "./components/layout/header";
import "./App.css";
import MainView from "./components/layout/mainView";

function App() {
  return (
    <>
      <Header />
      <main className="App">
        <MainView />
      </main>
    </>
  );
}

export default App;
