import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Box, formControlClasses } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import styled from "@emotion/styled";
import InputBase from "@mui/material/InputBase";
import { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { UploadFile } from "../../../service/api";

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
  color: "#2979ff",
  fontSize: "30px",
});

const Send = styled(SendIcon)({
  color: "#2979ff",
  fontSize: "30px",
});

function ChatBoxFooter({
  KeyPress,
  textmessage,
  setTextMessage,
  file,
  setFile,
  setImages,
}) {
  const handleMessage = (e) => {
    setTextMessage(e.target.value);
  };

  const handlefileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setTextMessage(selectedFile.name);
    }
  };

  const getImage = async () => {
    if (file) {
      const data = new FormData();
      data.append("name", file.name);
      data.append("file", file);
      let imageData = await UploadFile(data);
      setImages(imageData);
      setTextMessage("");
    }
  };

  return (
    <>
      <MainBox>
        <EmojiEmotionsIcon />
        <label htmlFor="fileinput">
          <AttachFile />
        </label>
        <input
          type="file"
          id="fileinput"
          style={{ display: "none" }}
          onChange={(e) => handlefileChange(e)}
        />
        <Search>
          <InputField
            placeholder="Type a message"
            id="message"
            value={textmessage}
            onChange={handleMessage}
            onKeyPress={(e) => KeyPress(e)}
          />
        </Search>
        <MicIcon />
        <Send onClick={() => getImage()} />
      </MainBox>
    </>
  );
}
export default ChatBoxFooter;
