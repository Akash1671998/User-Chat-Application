import styled from "@emotion/styled";
import ChatBoxFooter from "./ChatBoxFooter";
import { Box } from "@mui/material";
// import transparentChat from "../../../images/static/transparentChat.jpg";
import { useContext, useEffect, useState } from "react";
import { AccountContex } from "../../../contex";
import { UserMessage, getUserMessage } from "../../../service/api";
import ShowUserMessage from "./ShowMessage";

const MainBox = styled(Box)({
  background:'#bdbdbd'
})
const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

function ChatBoxMessage({ person, conversesion }) {
  const { loginuser } = useContext(AccountContex);
  const [textmessage, setTextMessage] = useState("");
  const [showMessage, setShowMessage] = useState([]);
  const [mesagestatus,setMessageStatus]=useState(false)
  const [file,setFile]=useState([]);

  const KeyPress = async (e) => {
    let code = e.key || e.which;
    if (code === "Enter") {
      let newMessage = {
        senderId: loginuser.sub,
        receiverId: person.sub,
        conversationId: conversesion?._id,
        textmessage: textmessage,
      };
      const data = await UserMessage(newMessage);
      setTextMessage("");
      setMessageStatus(prev=>!prev)
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
  }, [person?.sub, conversesion?._id,mesagestatus]);

  return (
    <>
      <MainBox>
        <Component>
          {showMessage &&
            showMessage.map((data) => {
              return <ShowUserMessage key={data.id} data={data} />;
            })}
        </Component>
        <ChatBoxFooter
          KeyPress={KeyPress}
          textmessage={textmessage}
          setTextMessage={setTextMessage}
          file={file}
          setFile={setFile}
        />
      </MainBox>
    </>
  );
}
export default ChatBoxMessage;
