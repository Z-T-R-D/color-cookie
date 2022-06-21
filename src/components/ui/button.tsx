import StyledButton from "../style/button.styled";
type ButonType = {
  text: string;
  onClick?: () => void;
};

const Button = (props: ButonType) => {
  return (
    <StyledButton onClick={props.onClick} type="button">
      {props.text}
    </StyledButton>
  );
};

export default Button;
