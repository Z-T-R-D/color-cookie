import styled from "styled-components";

const StyledDialog = styled.dialog`
  position: absolute;
  display: ${({ open }) => (open ? "grid" : "none")};
  background-color: var(--dialog-bg);
  color: var(--primary-clr);
  top: -15px;
  left: 85%;
  outline: 0;
  border: 0;
  box-shadow: 0 0 1px 0.75px var(--primary-clr);
  padding-inline: 0.25em;
  border-radius: 0.25em;
  text-transform: capitalize;
`;

export default StyledDialog;
