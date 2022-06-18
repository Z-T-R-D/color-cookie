import StyledBrand from "../style/brand.styled";
import logo from "../../image/1548612994.svg";

const Brand = () => {
  return (
    <StyledBrand>
      <h1>color-cookies</h1>
      <img src={logo} alt="logo" />
    </StyledBrand>
  );
};

export default Brand;
