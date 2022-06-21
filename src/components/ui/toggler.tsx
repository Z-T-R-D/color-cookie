import StyledToggler from "../style/toggler.styled";
import { useContext } from "react";
import ThemeCtx from "../../context/themeContext";

const Toggler = () => {
  const { active, setActive } = useContext(ThemeCtx);
  return (
    <StyledToggler>
      <div
        className="slider rounded "
        onClick={setActive}
        data-active={`${active}`}
      ></div>
    </StyledToggler>
  );
};

export default Toggler;
