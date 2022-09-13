import CycloneTwoToneIcon from "@mui/icons-material/CycloneTwoTone";

import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import Box from "@mui/material/Box";

const Loading = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <WrapperStyled>
        <CycloneTwoToneIcon />
      </WrapperStyled>
    </Box>
  );
};
const spin = keyframes`
  from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
`;

const WrapperStyled = styled.div`
  width: 50px;
  height: 50px;
  animation-name: ${spin};
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default Loading;
