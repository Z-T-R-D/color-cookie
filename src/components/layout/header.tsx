import styled from "styled-components";
import Brand from "../ui/brand";
import StyledHeader from "../style/header.styled";
import Toggler from "../ui/toggler";

const Header = () => {
  return (
    <StyledHeader>
      <Brand />
      <Toggler />
    </StyledHeader>
  );
};

export default Header;
