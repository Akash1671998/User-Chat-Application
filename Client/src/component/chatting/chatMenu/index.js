import { Box, Typography } from "@mui/material";
import ChatHeader from "./chatHeader";
import ChatSearch from "./chatSearch";
import Conversations from "./chatHeader/Conversationa";
import { useState } from "react";

function ChatMenu() {
  const [text, setText] = useState("");
  return (
    <>
      <Box>
        <ChatHeader />
        <ChatSearch  text={text} setText={setText} />
        <Conversations text={text}/>
      </Box>
    </>
  );
}
export default ChatMenu;
