import StyledButton from "../style/button.styled";

const Button: React.FunctionComponent<{ text: string }> = (props: {
  text: string;
}) => {
  return <StyledButton>{props.text}</StyledButton>;
};

export default Button;
