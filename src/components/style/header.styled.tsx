import styled from "styled-components";
const StyledHeader = styled.header`
  background-color: var(--light-clr);
  padding: 1.5em 0.5em;
  box-shadow: 1px 0 2px 2px var(--shadow2-clr);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: default;
  position: sticky;
  top: 0;
  z-index: 99999;
`;

export default StyledHeader;
