import StyledToggler from "../style/toggler.styled";

const Toggler = () => {
  return (
    <StyledToggler>
      <input type="checkbox" name="themeToggle" id="themeToggle" />
      <div className="slider rounded"></div>
    </StyledToggler>
  );
};

export default Toggler;
