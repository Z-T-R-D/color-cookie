import {
  Complimentary,
  SplitComplimentary,
  Triad,
  Tetrad,
} from "../../color-converter";
import StyledBox from "../style/box.styled";

type Props = {
  colors?: string | Complimentary | SplitComplimentary | Triad | Tetrad;
  title: string;
};

const Card = (props: Props) => {
  return (
    <div className="card">
      <h4 className="card_title">{props.title}</h4>
      <div className="card_body">
        {typeof props.colors === "string" ? (
          <StyledBox color={props.colors} />
        ) : (
          props.colors?.map((color, index) => (
            <StyledBox color={color} key={index.toString()} />
          ))
        )}
      </div>
    </div>
  );
};

export default Card;
