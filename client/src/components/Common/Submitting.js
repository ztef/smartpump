import React from "react";
import styled from "styled-components";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const StyledBackdrop = styled(Backdrop)`
  z-index: 10000 !important;
  color: white;
`;

function Submitting() {
  return (
    <StyledBackdrop open={true}>
      <CircularProgress color="inherit" />
    </StyledBackdrop>
  );
}

export default Submitting;