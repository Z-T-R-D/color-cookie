import StyledMainView from "../style/mainView.styled";
import Button from "../ui/button";
import { ReactComponent as Bg } from "../../image/bg.svg";
import { ReactComponent as Copy } from "../../image/copy.svg";
import { ChangeEventHandler, useState } from "react";
type InputState = {
  textInput: string;
};

const MainView = () => {
  const [input, setInput] = useState<InputState>({ textInput: "" });
  const [error, setError] = useState(false);
  const getInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const submit = () => {
    let valid: boolean;
    input.textInput[0] === "#" ? (valid = true) : (valid = false);
    setError(valid);
    setInput({ textInput: "" });
  };
  return (
    <StyledMainView Error={error}>
      <Bg />
      <div className="copieable">
        <input
          type="text"
          name="textInput"
          id="textInput"
          value={input.textInput}
          placeholder="#fffff"
          onChange={getInput}
        />
        <Copy />
      </div>
      <div className="button">
        <Button text="generate" onClick={submit} />
      </div>
    </StyledMainView>
  );
};

export default MainView;
