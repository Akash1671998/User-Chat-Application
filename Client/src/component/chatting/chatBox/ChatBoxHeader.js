import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

function ChatBoxHeader() {
  const Header = styled(Box)({
    height: "44px",
    background: "#ededed",
    display: "flex",
    padding: "8px 16px",
    alignItems: "center",
  });

  const Image = styled("img")({
    width: 40,
    height: 40,
    objectFit: "cover",
    borderRadius: "50%",
  });

  const RightContainer = styled(Box)({
    marginLeft: "auto",
    "& > svg": {
      padding: "8px",
      fontSize: "22px",
      color: "#000",
    },
  });

  return (
    <>
      <Header>
        <Image src={""} alt="display picture" />
        <Box>
          <Typography> Name </Typography>
          <Typography> Online Status </Typography>
        </Box>
        <RightContainer></RightContainer>
      </Header>
    </>
  );
}
export default ChatBoxHeader;
