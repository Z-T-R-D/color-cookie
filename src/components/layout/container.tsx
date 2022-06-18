import { ReactComponentElement } from "react";
import StyledContainer from "../style/container.syled";

const Container = (prop: any) => {
  return <StyledContainer>{prop.children}</StyledContainer>;
};

export default Container;
