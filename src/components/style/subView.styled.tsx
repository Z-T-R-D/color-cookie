import styled from "styled-components";

const StyledSubView = styled.section`
  display: grid;
  place-content: center;
  place-items: center;
  gap: 1em;
  margin-block-end: 1em;
  .card {
    background-color: var(--light-clr);
    color: var(--primary-clr);
    display: grid;
    gap: 1.25em;
    &_title {
      text-transform: capitalize;
      font-size: clamp(0.5rem, 0.5rem + 3vw, 1rem);
      text-align: center;
      color: var(--dark-clr);
    }
    &_body {
      display: flex;
      justify-content: space-between;
      gap: 1em;
    }
  }
`;

export default StyledSubView;
