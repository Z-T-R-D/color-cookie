import StyledDialog from "../style/dialog.styled";

const Dialog = (props: { open: boolean }) => {
  return (
    <StyledDialog open={props.open}>
      <p>copied</p>
    </StyledDialog>
  );
};

export default Dialog;
