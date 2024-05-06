import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import {
  Conversation,
  ConversationMessage,
  getChatUser,
} from "../../../../../service/api";
import { useContext, useEffect, useState } from "react";
import { AccountContex } from "../../../../../contex";
import { getConversationMessage } from "../../../../../service/api";
import { useApplicationContexController } from "../../../../../contex/ApplicationContex";
import FormateDate from "../../../chatBox/FormateDate/FormateDate";

const MainBox = styled(Box)`
  height: 45px;
  display: flex;
  padding: 13px 0;
  cursor: pointer;
`;

const Container = styled(Box)({
  display: "flex",
});

const Timestamp = styled(Typography)`
  font-size: 12px;
  margin-left: 250px;
  color: #f3e5f5;
  margin-right: 20px;
`;

const Text = styled(Typography)`
  display: block;
  color: #f3e5f5;
  font-size: 14px;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  objectFit: "cover",
  borderRadius: "50%",
  padding: "0 14px",
});

function ChatConvesationUser({ user }) {
  const [controller, dispatch] = useApplicationContexController();
  const { mesagestatus } = controller;
  const { loginuser, setPerson } = useContext(AccountContex);
  const [currentMessage, setCurrentMEssage] = useState({});

  let senderId = user?.sub;
  let receiverId = loginuser.sub;

  // for show Current Message in ChatUSer List
  useEffect(() => {
    const GetConversationDetails = async () => {
      let data = await getConversationMessage({
        senderId: loginuser?.sub,
        receiverId: user?.sub,
      });
      setCurrentMEssage({
        textmessage: data?.message,
        timestamps: data?.updatedAt,
      });
    };

    GetConversationDetails();
  }, [mesagestatus]);

  const getUser = async () => {
    setPerson(user);
    await ConversationMessage({ senderId: senderId, receiverId: receiverId });
  };
  return (
    <>
      <MainBox onClick={() => getUser()}>
        <Box>
          <Image src={user.picture} alt="dp" />
        </Box>
        <Box style={{ width: "100%" }}>
          <Container>
            <Typography>{user.name}</Typography>
            {currentMessage?.textmessage && (
              <Timestamp>{FormateDate(currentMessage?.timestamps)}</Timestamp>
            )}
          </Container>
          <Box>
            <Text>
              {currentMessage?.textmessage?.includes("localhost")
                ? "media"
                : currentMessage.textmessage}
            </Text>
          </Box>
        </Box>
      </MainBox>
    </>
  );
}
export default ChatConvesationUser;
