import Header from "./components/layout/header";
import MainView from "./components/layout/mainView";
import SubView from "./components/layout/subView";
import GlobalStyle from "./components/style/global.styled";
import { useEffect, useState } from "react";
import generate from "./color-converter";
import { Combinations } from "./color-converter";
type InputType = {
  textInput: string;
};

function App() {
  // states
  const [colors, setColors] = useState<Combinations>();
  const [input, setInput] = useState<InputType>({ textInput: "" });
  const [show, setShow] = useState({ display: false });
  const getInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleGenerate = () => {
    let Colors = generate(input.textInput);
    setColors(Colors);
    setShow({ display: true });
    document.documentElement.style.setProperty("--primary-clr", Colors.hex);
  };
  const handleCopy = () => {
    // navigator.clipboard.writeText(input.textInput);
    console.log(input.textInput);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <MainView
          onClick={handleGenerate}
          onChange={getInput}
          onCopy={handleCopy}
          input={input.textInput}
        />
        <SubView colors={colors} display={show.display} />
      </main>
    </>
  );
}

export default App;
