import StyledBox from "../style/box.styled";

type PropType = {
  colors: string[];
  title: string;
};

const Card = (props: PropType) => {
  const getTitle = (): string => {
    let title: string;
    if (props.title === "mainColor") {
      title = "main color";
    } else if (props.title === "splitComplimentary") {
      title = "split complimentary";
    } else {
      title = props.title;
    }
    return title;
  };
  return (
    <div className="card">
      <h4 className="card_title">{getTitle()}</h4>
      <div className="card_body">
        {props.colors.map((color, index) => (
          <div className="content" key={index.toString()}>
            <StyledBox color={color} />
            <p>{color}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
