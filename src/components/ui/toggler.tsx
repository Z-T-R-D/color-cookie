import StyledToggler from "../style/toggler.styled";
import { useState, useContext } from "react";
import { ThemeContext } from "styled-components";

const Toggler = () => {
  const themeContext = useContext(ThemeContext);
  const [isActive, setActive] = useState(false);
  function handleToggle() {
    isActive ? setActive(false) : setActive(true);
    console.log(themeContext);
  }
  return (
    <StyledToggler>
      <div
        className="slider rounded "
        onClick={handleToggle}
        data-active={`${isActive}`}
      ></div>
    </StyledToggler>
  );
};

export default Toggler;
