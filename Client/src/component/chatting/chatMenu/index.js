import { Box, Typography } from "@mui/material";
import ChatHeader from "./chatHeader";
import ChatSearch from "./chatSearch";

function ChatMenu() {
  return (
    <>
      <Box>
        <ChatHeader />
        <ChatSearch />
      </Box>
    </>
  );
}
export default ChatMenu;
