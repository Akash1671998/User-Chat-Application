import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Box } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import styled from "@emotion/styled";
import InputBase from "@mui/material/InputBase";

function ChatBoxFooter() {
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

  const InputField = styled(InputBase)({
    width: "100%",
    padding: "20px",
    paddingLeft: "25px",
    fontSize: "14px",
    height: "20px",
    width: "100%",
  });

  const AttachFile = styled(AttachFileIcon)({
    transform: "rotate(40deg)",
  });

  return (
    <>
      <MainBox>
        <EmojiEmotionsIcon />
        <AttachFile />
        <Search>
          <InputField placeholder="Type a message" />
        </Search>
        <MicIcon />
      </MainBox>
    </>
  );
}
export default ChatBoxFooter;
