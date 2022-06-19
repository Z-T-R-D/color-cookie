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
    position: absolute;
    justify-content: space-between;
    transition: box-shadow 1s;
    background-color: #fff;
    box-shadow: -0.5px 0 0.5px 1px ${(props: { Error: boolean }) =>
      props.Error ? "red" : "#ddd"}
    padding: 0.75em;
    width: min(80vw, 60ch);
    color: var(--primary-clr);
    font-size: clamp(0.5rem, 1rem + 3vw, 1.15rem);
    &:focus-within {
      box-shadow: 0 0 2px 1px var(--primary-clr);
    }
  }
  input {
    all: unset;
    width: 90%;
  }
  .copy {
    width: 1.8em;
    padding: 0.25em;
    border-radius: 0.25em;
    transition: 0.25s;
    &:hover {
      background-color: #ddd;
    }
    &:active {
      background-color: #fff;
    }
  }
  .button {
    position: absolute;
    margin-block-start: 10em;
  }
`;

export default StyledMainView;
