import StyledMainView from "../style/mainView.styled";
import Button from "../ui/button";
import { ReactComponent as Bg } from "../../image/bg.svg";
import { ReactComponent as Copy } from "../../image/copy.svg";

type PropType = {
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  input: string;
  onCopy: () => void;
};

const MainView = (props: PropType) => {
  return (
    <StyledMainView>
      <Bg />
      <div className="form">
        <div className="copieable">
          <input
            type="text"
            name="textInput"
            id="textInput"
            value={props.input}
            placeholder="#fffff"
            onChange={props.onChange}
            minLength={4}
            maxLength={7}
            required
            min={4}
            max={7}
          />
          <Copy onClick={props.onCopy} />
        </div>
        <Button text="generate" onClick={props.onClick} />
      </div>
    </StyledMainView>
  );
};

export default MainView;
