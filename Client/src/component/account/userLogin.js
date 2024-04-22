import { useContext } from "react";
import { AccountContex } from "../../contex";

import styled from "@emotion/styled";
import { Box, Dialog, List, ListItem, Typography } from "@mui/material";
import { qrCodeImage } from "../../images/image";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Chatting from "../chatting/chatting";
import { addUser } from "../../service/api";

const MainBox = styled(Box)({
  display: "flex",
});

const SecondBox = styled(Box)({
  padding: "50px 0 56px 50px",
});

const Title = styled(Typography)({
  fontSize: "26px",
  color: "#525252",
  fontWait: 300,
});
const DialogStyle = {
  height: "100%",
  //   maxHeight: "100%",
  width: "60%",
  maxWidth: "100%",
  marginTop: "12px",
  boxShadow: "none",
  overflow: "none",
  border: "1px solid black",
};

const StyleList = styled(List)({
  "& > div ": {
    padding: "0",
    marginTop: "15px",
    fontSize: "18px",
    lineHeight: "28px",
    color: "#2196f3",
  },
});
function UserLogin() {
  const { setLoginUser } = useContext(AccountContex);

  const SuccessLogin = async (res) => {
    const decode = jwtDecode(res.credential);
    setLoginUser(decode);
    await addUser(decode);
  };

  const LoginError = () => {};

  return (
    <>
      <Dialog open={true} PaperProps={{ sx: DialogStyle }} hideBackdrop={true}>
        <MainBox>
          <SecondBox>
            <Title>To Use Chat On Your DeskTop:</Title>
            <StyleList>
              <ListItem>1 : Open Chat On Your Phone</ListItem>
              <ListItem>2: Tab Menu Setting & Select Chat</ListItem>
              <ListItem>
                3:Point Your Phone To This Screen To Capture The Code
              </ListItem>
            </StyleList>
          </SecondBox>

          <Box style={{ position: "relative" }}>
            <img
              src={qrCodeImage}
              alt="qr-code"
              height={264}
              width={264}
              style={{ margin: "50px 0 0 50px" }}
            />
            <Box
              style={{
                position: "obsuute",
                top: "50%",
                transform: "translateX(10%)",
              }}
            >
              <GoogleLogin onSuccess={SuccessLogin} onError={LoginError} />
            </Box>
          </Box>
        </MainBox>
      </Dialog>
    </>
  );
}
export default UserLogin;
