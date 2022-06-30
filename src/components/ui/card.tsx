import StyledBox from "../style/box.styled";

const Card = ({ colors, title }: { colors: string[]; title: string }) => {
  const getTitle = (): string => {
    let value: string;
    if (title === "mainColor") {
      value = "main color";
    } else if (title === "splitComplimentary") {
      value = "split complimentary";
    } else {
      value = title;
    }
    return value;
  };
  return (
    <div className="card">
      <h4 className="card_title">{getTitle()}</h4>
      <div className="card_body">
        {colors.map((color, index) => (
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
