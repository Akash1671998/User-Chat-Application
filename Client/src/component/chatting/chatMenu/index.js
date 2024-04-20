import { Box, Typography } from "@mui/material";
import ChatHeader from "./chatHeader";
import ChatSearch from "./chatSearch";
import Conversations from "./chatHeader/Conversationa";

function ChatMenu() {
  return (
    <>
      <Box>
        <ChatHeader />
        <ChatSearch />
        <Conversations/>
      </Box>
    </>
  );
}
export default ChatMenu;
