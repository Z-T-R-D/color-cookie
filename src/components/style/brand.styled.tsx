import styled from "styled-components";

const StyledBrand = styled.div`
  display: flex;
  align-items: center;
  color: var(--primary-clr);
  flex-wrap: wrap;
  justify-content: center;
  h1 {
    text-transform: uppercase;
    font-size: clamp(0.75rem, 0.5rem + 3vw, 2rem);
  }
  svg {
    width: clamp(0.5em, 0.5em + 3vw, 1.5em);
    margin-inline-start: 0.25em;
    height: fit-content;
  }
`;

export default StyledBrand;
