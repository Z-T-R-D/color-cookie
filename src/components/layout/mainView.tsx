import StyledMainView from "../style/mainView.styled";
import Button from "../ui/button";
import { ReactComponent as Bg } from "../../image/bg.svg";
import { ReactComponent as Copy } from "../../image/copy.svg";
import { useState, useContext, useEffect } from "react";
import ColorContext from "../../context/colorContext";
import Dialog from "../ui/dialog";
import { DEFAULT_MAX_VERSION } from "tls";

// create type for input
type InputType = {
  textInput: string;
};

const MainView = () => {
  // create error state
  const [isError, setError] = useState(false);
  // create copy state
  const [isCopied, setCopied] = useState(false);
  // create input state
  const [Input, setInput] = useState<InputType>({ textInput: "" });
  // get setColor function from context[general state]
  const { setColors, setDisplay } = useContext(ColorContext);
  // insert input to state on each text input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  // set input to general state input [useContext input]
  const handleClick = () => {
    const input = Input.textInput;
    if (input[0] === "#") {
      if (input.length === 4) {
        setColors(input);
        setInput({ textInput: "" });
        setError(false);
      } else if (input.length === 7) {
        setColors(input);
        setInput({ textInput: "" });
        setError(false);
      } else {
        setDisplay(false);
        setError(true);
      }
    } else if (input === "") {
      setColors(input);
      setInput({ textInput: "" });
      setError(false);
    } else {
      setDisplay(false);
      setError(true);
    }
  };
  // copy text input and display dialog
  const handleCopy = () => {
    navigator.clipboard.writeText(Input.textInput);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1100);
  };
  return (
    <StyledMainView>
      <Bg />
      <div className="form">
        <div className={isError ? "copieable error" : "copieable"}>
          <input
            type="text"
            name="textInput"
            id="textInput"
            value={Input.textInput}
            placeholder="#fffff"
            onChange={handleChange}
            minLength={4}
            maxLength={7}
            min={4}
            max={7}
          />
          <Copy onClick={handleCopy} />
        </div>
        <Dialog open={isCopied} />
        <Button text="generate" onClick={handleClick} />
      </div>
    </StyledMainView>
  );
};

export default MainView;
