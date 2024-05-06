import { Box, Divider, Typography } from "@mui/material";

import styled from "@emotion/styled";
import  emptyChatImage  from "../../../images/EmptyChat.jpg";

function Emptychat() {
  const MainBox = styled(Box)({
    background: "#f8f9fa",
    padding: "30px 0px",
    textAlign: "center",
    height: "80vh",
  });

  const Imagebox = styled(Box)({
    padding: "0px , 20px",
  });

  const Image = styled("img")({
    width: 400,
    marginTop: 100,
  });

  const StyleDivider =styled(Divider)({
    margin:'40px 0px',
    opacity:'0.4',
  })
  return (
    <>
      <MainBox>
        <Imagebox>
          <Image src={emptyChatImage} alt="image"  />
          <Typography>Web Chat App </Typography>
          <Typography>Send and Received Message </Typography>
          <StyleDivider/>
        </Imagebox>
      </MainBox>
    </>
  );
}
export default Emptychat;
