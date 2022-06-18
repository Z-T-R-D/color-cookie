import styled from "styled-components";

const StyledMainView = styled.div`
  width: 100%;
  height: 80vh;
  display: grid;
  place-items: center;
  place-content: center;
  object-position: top;

  svg {
    --primary-clr: blue;
    --secondary-clr: #2f2e41;
    width: 100%;
  }

  .copieable {
    display: flex;
    position: absolute;
    justify-content: space-between;
    background-color: #fff;
    outline: 1px solid #ccc;
    padding: 0.75em;
    width: min(80vw, 60ch);
    color: var(--primary-clr);
    font-size: clamp(0.5rem, 1rem + 3vw, 1.15rem);
    &:focus-within {
      outline: 1px solid #ddd;
    }
  }
  input {
    all: unset;
    width: 85%;
  }
  .copy {
    width: 1.8em;
    padding: 0.25em;
    border-radius: 0.25em;
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
