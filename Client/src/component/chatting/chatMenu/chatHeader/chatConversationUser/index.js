import styled from "@emotion/styled";
import { Box } from "@mui/material";

function ChatConvesationUser({ user }) {
  const MainBox = styled(Box)({
    height: "45px",
    display: "flex",
    padding: "13px 0",
    cursor: "pointer",
  });

  const Image = styled("img")({
    width: 50,
    height: 50,
    objectFit: "cover",
    borderRadius: "50%",
    padding: "0 14px",
  });
  return (
    <>
      <MainBox>
        <Box>{<Image src={user.picture} alt="dp" />}</Box>

        <Box>
          <Box>{user.name}</Box>
        </Box>
      </MainBox>
    </>
  );
}
export default ChatConvesationUser;
