import StyledSubView from "../style/subView.styled";
import { Combinations } from "../../color-converter";
import Card from "../ui/card";
type PropType = {
  colors: Combinations | undefined;
  display: boolean;
};
const SubView = (props: PropType) => {
  let keys = props.colors && Object.keys(props.colors);
  let values = props.colors && Object.values(props.colors);
  return (
    <div className={props.display ? "active" : "none"}>
      <StyledSubView>
        {keys &&
          keys.map((name, index) => (
            <Card
              key={index.toString()}
              title={name}
              colors={values && values[index]}
            />
          ))}
      </StyledSubView>
    </div>
  );
};

export default SubView;
