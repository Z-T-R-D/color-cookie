import styled from "styled-components";

const StyledSubView = styled.section`
  display: ${(props) => (props.slot === "true" ? "grid" : "none")};
  place-items: center;
  gap: 1em;
  margin-block-end: 1em;
  .card {
    background-color: var(--bg-clr);
    display: grid;
    place-items: center;
    padding-block: 0.5em;
    gap: 1em;
    &_title {
      text-transform: capitalize;
      font-size: clamp(0.5rem, 1rem + 3vw, 1rem);
      color: var(--bg-text-clr);
    }
    &_body {
      display: flex;
      justify-content: space-between;
      gap: 1em;
    }
    .content {
      text-align: center;
      p {
        font-size: clamp(0.25rem, 0.25rem + 2vw, 0.75rem);
        margin-block: 0.5em;
        color: var(--hex-clr, #aaa);
      }
    }
  }
`;

export default StyledSubView;
