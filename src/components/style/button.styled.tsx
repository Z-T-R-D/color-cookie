import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  padding: 0.75em 2em;
  box-shadow: 0 0 1px 0.5px var(--primary-clr);
  background-color: var(--light-clr);
  color: var(--primary-clr);
  text-transform: capitalize;
  appearance: none;
  border: 0;
  border-radius: 0.5em;
  transition: 0.25s;

  &:hover {
    background-color: var(--primary-clr);
    color: var(--light-clr);
  }
  &:active {
    background-color: var(--light-clr);
    color: var(--primary-clr);
  }
`;

export default StyledButton;
