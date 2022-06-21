import styled from "styled-components";

const StyledMainView = styled.section`
  width: 100%;
  height: 80vh;
  display: grid;
  place-items: center;
  place-content: center;
  position: relative;
  svg {
    width: 100%;
  }

  .copieable {
    display: flex;
    justify-content: space-between;
    transition: box-shadow 0.5s;
    background-color: var(--input-bg-clr);
    box-shadow: 0px 0 1px 1px var(--input-border-clr);
    padding: 0.75em;
    width: min(80vw, 60ch);
    color: var(--input-text-clr);
    font-size: clamp(0.5rem, 1rem + 3vw, 1.15rem);
    border-radius: 0.5em;
    &:focus-within {
      --input-border-clr: var(--primary-clr);
      box-shadow: 0 0 2px 1px var(--input-border-clr);
    }
  }
  input {
    all: unset;
    width: 90%;
  }
  .copy {
    cursor: pointer;
    width: 1.7em;
    padding: 0.25em;
    font-size: 1.15em;
    border-radius: 0.25em;
    transition: 0.25s;
    &:hover {
      background-color: var(--shadow-clr);
    }
    &:active {
      background-color: var(--light-clr);
    }
  }
  .form {
    display: grid;
    place-content: center;
    position: absolute;
    place-items: center;
    gap: 1em;
  }
`;

export default StyledMainView;
