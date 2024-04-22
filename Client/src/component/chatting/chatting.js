import { useContext } from "react";
import { AccountContex } from "../../contex"
import { Box, Dialog, Typography, styled } from "@mui/material";
import ChatMenu from "./chatMenu";
import Emptychat from "./emptyChat";
import ChatBox from "./chatBox/ChatBox";



function Chatting() {
  const {person}=useContext(AccountContex);
  const DialogStyle = {
    height: "90%",
    maxHeight: "100%",
    width: "100%",
    maxWidth: "100%",
    margin: "20px",
    boxShadow: "none",
    overflow: "none",
    border: "1px solid black",
    borderRadius: "0px",
  };

  const MainBox = styled(Box)({
    display: "flex",
  });

  const LeftBox = styled(Box)({
    minWidth: 470,
  });

  const RighttBox = styled(Box)({
    width: "70%",
    minWidth: 300,
    height: "100%",
    borderLeft: "1px solid rbga(0,0,0,0.14)",
  });
  return (
    <>
      <Dialog
        open={true}
        PaperProps={{ sx: DialogStyle }}
        hideBackdrop={true}
        maxWidth={"md"}
      >
        <MainBox>
          <LeftBox>
            <ChatMenu />
          </LeftBox>

          <RighttBox>
            {Object.keys(person).length ? <ChatBox /> : <Emptychat/>}
          </RighttBox>
        </MainBox>
      </Dialog>
    </>
  );
}
export default Chatting;
