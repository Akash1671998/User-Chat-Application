import styled from "@emotion/styled";
import ChatBoxFooter from "./ChatBoxFooter";
import { Box } from "@mui/material";
// import transparentChat from "../../../images/static/transparentChat.jpg";
import { useContext, useEffect, useRef, useState } from "react";
import { AccountContex } from "../../../contex";
import { UploadFile, UserMessage, getUserMessage } from "../../../service/api";
import ShowUserMessage from "./ShowMessage";
import { useApplicationContexController,setMessageStatus } from "../../../contex/ApplicationContex";

const MainBox = styled(Box)({
  background: "#bdbdbd",
});
const Component = styled(Box)`
  height: 75vh;
  overflow-y: scroll;
`;

function ChatBoxMessage({ person, conversesion }) {
  const [controller, dispatch] = useApplicationContexController();
  const {activeUser,mesagestatus} = controller;
  const { loginuser,socket } = useContext(AccountContex);
  const [textmessage, setTextMessage] = useState("");
  const [showMessage, setShowMessage] = useState([]);
  // const [mesagestatus, setMessageStatus] = useState(false);
  const [fileNameLink, setFileNameLink] = useState();
  const [file, setFile] = useState([]);
  const [images, setImages] = useState("");

  const KeyPress = async (e) => {
    let code = e.key || e.which;
    if (code === "Enter") {
      e.preventDefault();
      if (textmessage) {
        handleSendMessage();
      }
    }
  };
  const [incomingMessage, setIncomingMessage] = useState(null);
  useEffect(() => {
    socket.current.on('getMessage', data => {
        setIncomingMessage({
            ...data,
            createdAt: Date.now()
        })
    })
}, []);

useEffect(() => {
  incomingMessage && conversesion?.members?.includes(incomingMessage.senderId) && 
  setShowMessage((prev) => [...prev, incomingMessage]);
  
}, [incomingMessage, conversesion]);

  const handleSendMessage = () => {
    let newMessage = null;
    if (textmessage) {
      newMessage = {
        senderId: loginuser.sub,
        receiverId: person.sub,
        conversationId: conversesion?._id,
        type: "text",
        textmessage: textmessage,
      };
    }
    socket.current.emit('sendMessage', newMessage);

    UserMessage(newMessage);
    setTextMessage("");
    setFile([]);
    setMessageStatus(dispatch,(prev) => !prev);
  };

  useEffect(() => {
    let newMessage = null;
    newMessage = {
      senderId: loginuser.sub,
      receiverId: person.sub,
      conversationId: conversesion?._id,
      type: "file",
      textmessage: images,
    };
    if (file && file.length != 0) {
      UserMessage(newMessage);
      getImage();
    }
    setMessageStatus((prev) => !prev);
  }, [file]);

  const getImage = async () => {
    if (file) {
      const data = new FormData();
      data.append("name", file.name);
      data.append("file", file);
      var fileName = await UploadFile(data);
      setImages(fileName);
      setFileNameLink(fileName);
      setFile([]);
    }
  };

  useEffect(() => {
    const getMessage = async () => {
      if (conversesion && conversesion?._id) {
        let Id = conversesion?._id;
        try {
          let data = await getUserMessage(Id);
          setShowMessage(data);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      }
    };
    getMessage();
  }, [person?.sub, conversesion?._id, mesagestatus]);

  let scroll = useRef();
useEffect(()=>{
  scroll.current?.scrollIntoView({Transition:'smooth'});
},[showMessage])
  return (
    <>
      <MainBox>
        <Component ref={scroll}>
          {showMessage &&
            showMessage.map((data) => {
              return (
                <ShowUserMessage
                  key={data.id}
                  data={data}
                  fileNameLink={fileNameLink}
                />
              );
            })}
        </Component>
        <ChatBoxFooter
          KeyPress={KeyPress}
          textmessage={textmessage}
          setTextMessage={setTextMessage}
          file={file}
          setFile={setFile}
          setImages={setImages}
          handleSendMessage={handleSendMessage}
        />
      </MainBox>
    </>
  );
}
export default ChatBoxMessage;
