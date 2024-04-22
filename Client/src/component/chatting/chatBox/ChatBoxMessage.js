import styled from "@emotion/styled";
import ChatBoxFooter from "./ChatBoxFooter";
import { Box } from "@mui/material";
import transparentChat from '../../../images/static/transparentChat.jpg'


function ChatBoxMessage() {
  const MainBox = styled(Box)`
    background-image: url(${transparentChat});
    background-size: 40%;
  `;
  const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

  return (
    <>
      <MainBox>
        <Component>Chat Box Message Component</Component>
        <ChatBoxFooter />
      </MainBox>
    </>
  );
}
export default ChatBoxMessage;
