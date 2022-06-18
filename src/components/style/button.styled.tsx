import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5em 1.5em;
  box-shadow: 0 0 1px 0.5px var(--primary-clr);
  background-color: #fff;
  color: var(--primary-clr);
  text-transform: capitalize;
  appearance: none;
  border: 0;
  border-radius: 0.5em;
  &:hover {
    background-color: var(--primary-clr);
    color: #fff;
  }
  &:active {
    background-color: #fff;
    color: var(--primary-clr);
  }
`;

export default StyledButton;
