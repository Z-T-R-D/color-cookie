import styled from "styled-components";

const StyledBox = styled.div`
  width: min(15vw, 15ch);
  aspect-ratio: 1/0.5;
  outline: 1px solid var(--shadow3-clr);
  background-color: ${(props) => props.color};
`;

export default StyledBox;
