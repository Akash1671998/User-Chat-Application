import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Box } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import styled from "@emotion/styled";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";

const MainBox = styled(Box)({
  height: "55px",
  background: "#ededed",
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: "0px 15px",
  "& > * ": {
    margin: "5px",
    color: "#919191",
  },
});

const Search = styled(Box)({
  borderRadius: "18px",
  backgroundColor: "#FFFFFF",
  width: "calc(94% - 100px)",
});

const InputField = styled(({ ...other }) => <InputBase {...other} />)({
  width: "100%",
  padding: "20px",
  paddingLeft: "25px",
  fontSize: "14px",
  height: "20px",
});

const AttachFile = styled(AttachFileIcon)({
  transform: "rotate(40deg)",
});

function ChatBoxFooter({KeyPress,message,setMessage}) {


  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <MainBox>
        <EmojiEmotionsIcon />
        <AttachFile />
        <Search>
        <InputField
            placeholder="Type a message"
            id="message"
            value={message}
            onChange={handleMessage}
            onKeyPress={(e) => KeyPress(e)}
          />
        </Search>
        <MicIcon />
      </MainBox>
    </>
  );
}
export default ChatBoxFooter;
