import styled from "styled-components";

const StyledToggler = styled.div`
  position: relative;
  display: inline-block;
  width: 4em;
  aspect-ratio: 1/0.125;
  cursor: pointer;
  & input {
    width: 0;
    opacity: 0;
    aspect-ratio: 1;
  }
  & .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: #f9f9f9;
    box-shadow: inset 0 0 2px 0.5px #ddd;
    &::before {
      position: absolute;
      content: "";
      inset: 0.2em 0.25em;
      width: 30%;
      background-color: var(--primary-clr);
      transition: transform 0.25s;
    }
    &:hover {
      &::before {
        transform: translateX(calc(4em / 2 + 0.28em));
      }
    }
    &.rounded {
      border-radius: 1em;
      &:before {
        border-radius: 1em;
      }
    }
  }
  /* input:checked + &_slider {
    background-color: red;
  } */
  /* input:checked + &_slider:before {
    transform: translateX(26px);
    /* background-color: ; */
`;

export default StyledToggler;
