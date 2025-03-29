import styled from "styled-components";

const StyledBox = styled.div`
  width: min(15vw, 20ch);
  aspect-ratio: 2/0.8;
  border-radius: 0.5em;
  background-color: ${(props) => props.color};
`;

export default StyledBox;
