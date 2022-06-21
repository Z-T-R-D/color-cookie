import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  padding: 0.75em 2em;
  box-shadow: 0 0 1px 1px var(--btn-border-clr);
  background-color: var(--btn-bg-clr);
  color: var(--btn-text-clr);
  text-transform: capitalize;
  appearance: none;
  border: 0;
  border-radius: 0.5em;
  transition: background-color 0.125s;

  &:hover {
    --btn-bg-clr: var(--btn-bg-hover-clr);
    --btn-text-clr: var(--btn-text-hover-clr);
    background-color: var(--btn-bg-clr);
    color: var(--btn-text-clr);
  }
  &:active {
    --btn-bg-clr: var(--btn-bg-active-clr);
    --btn-text-clr: var(--btn-text-active-clr);
    background-color: var(--btn-bg-clr);
    color: var(--btn-text-clr);
  }
`;

export default StyledButton;
