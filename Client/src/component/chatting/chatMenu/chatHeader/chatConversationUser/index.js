import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Conversation, ConversationMessage, getChatUser } from "../../../../../service/api";
import { useContext } from "react";
import { AccountContex } from "../../../../../contex";

function ChatConvesationUser({ user }) {
  const {loginuser ,setPerson}=useContext(AccountContex);


  let senderId =user?.sub;
  let receiverId = loginuser.sub;

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

  const getUser = async ()=>{
    setPerson(user)
await ConversationMessage ({senderId:senderId , receiverId:receiverId});
  } 
  return (
    <>
      <MainBox onClick={()=>getUser()}>
        <Box>{<Image src={user.picture} alt="dp" />}</Box>

        <Box>
          <Box>{user.name}</Box>
        </Box>
      </MainBox>
    </>
  );
}
export default ChatConvesationUser;
