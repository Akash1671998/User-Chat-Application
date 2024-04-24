import styled from "@emotion/styled";
import ChatBoxFooter from "./ChatBoxFooter";
import { Box } from "@mui/material";
import transparentChat from "../../../images/static/transparentChat.jpg";
import { useContext, useState } from "react";
import { AccountContex } from "../../../contex";

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
  const [message, setMessage] = useState("");

  const KeyPress = (e) => {
    let code = e.key || e.which;
    if (code === "Enter") {
      let newMessage = {
        senderId: loginuser.sub,
        receiverId: person.sub,
        conversationId: conversesion._id,
        message: message,
      };
      console.log(newMessage);
    }
  };
  return (
    <>
      <MainBox>
        <Component>Chat Box Message Component</Component>
        <ChatBoxFooter
          KeyPress={KeyPress}
          message={message}
          setMessage={setMessage}
        />
      </MainBox>
    </>
  );
}
export default ChatBoxMessage;
