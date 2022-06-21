import StyledSubView from "../style/subView.styled";
import Card from "../ui/card";
import { useContext } from "react";
import ColorContext from "../../context/colorContext";

const SubView = () => {
  const { colors, display } = useContext(ColorContext);
  const keys = Object.keys(colors);
  const values: string[][] = Object.values(colors);
  return (
    <StyledSubView slot={`${display}`}>
      {keys.map((key, index) => (
        <Card key={index.toString()} title={key} colors={values[index]} />
      ))}
    </StyledSubView>
  );
};

export default SubView;
