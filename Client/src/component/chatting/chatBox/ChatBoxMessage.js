import styled from "@emotion/styled";
import ChatBoxFooter from "./ChatBoxFooter";
import { Box } from "@mui/material";
import transparentChat from "../../../images/static/transparentChat.jpg";
import { useContext, useEffect, useState } from "react";
import { AccountContex } from "../../../contex";
import { UserMessage, getUserMessage } from "../../../service/api";

const MainBox = styled(Box)`
  background-image: url(${transparentChat});
  background-size: 40%;
`;
const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

function ChatBoxMessage({ person, conversesion }) {
  const { loginuser } = useContext(AccountContex);
  const [textmessage, setTextMessage] = useState("");

  const KeyPress =async (e) => {
    let code = e.key || e.which;
    if (code === "Enter") {
      let newMessage = {
        senderId: loginuser.sub,
        receiverId: person.sub,
        conversationId: conversesion._id,
        textmessage: textmessage,
      };
      const  data = await  UserMessage(newMessage);
      setTextMessage('');
    }
  };


  useEffect(() => {
    const getMessage = async () => {
      if (conversesion && conversesion._id) {
        let Id = conversesion._id;
        console.log("Conversation ID:", Id);
        try {
          let data = await getUserMessage(Id);
          console.log("User messages:", data);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      } else {
        console.error("Conversation ID is undefined");
      }
    }
    getMessage();
  }, [person.sub, conversesion]);
  return (
    <>
      <MainBox>
        <Component>Chat Box Message Component</Component>
        <ChatBoxFooter
          KeyPress={KeyPress}
          textmessage={textmessage}
          setTextMessage={setTextMessage}
        />
      </MainBox>
    </>
  );
}
export default ChatBoxMessage;
