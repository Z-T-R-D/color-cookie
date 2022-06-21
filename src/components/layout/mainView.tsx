import StyledMainView from "../style/mainView.styled";
import Button from "../ui/button";
import { ReactComponent as Bg } from "../../image/bg.svg";
import { ReactComponent as Copy } from "../../image/copy.svg";
import { useState, useContext } from "react";
import ColorContext from "../../context/colorContext";

type InputType = {
  textInput: string;
};

const MainView = () => {
  const [Input, setInput] = useState<InputType>({ textInput: "" });
  const { setColors } = useContext(ColorContext);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  function handleClick() {
    setColors(Input.textInput);
  }
  return (
    <StyledMainView>
      <Bg />
      <div className="form">
        <div className="copieable">
          <input
            type="text"
            name="textInput"
            id="textInput"
            value={Input.textInput}
            placeholder="#fffff"
            onChange={handleChange}
            minLength={4}
            maxLength={7}
            required
            min={4}
            max={7}
          />
          <Copy />
        </div>
        <Button text="generate" onClick={handleClick} />
      </div>
    </StyledMainView>
  );
};

export default MainView;
