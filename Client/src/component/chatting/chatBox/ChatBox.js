import ChatBoxFooter from "./ChatBoxFooter";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxMessage from "./ChatBoxMessage";
import { useContext, useEffect, useState } from "react";
import { AccountContex } from "../../../contex";
import { getConversationMessage } from "../../../service/api";

function ChatBox() {
  const { loginuser, person } = useContext(AccountContex);

  const [conversesion,setConversesion]=useState([]);

  const getConversationDetails = async () => {
    let data = await getConversationMessage({
      senderId: loginuser.sub,
      receiverId: person.sub,
    });
    setConversesion(data);

  };

  console.log("JJJJJJJJJJJJJJ10aaaaaaaaaaaaaaaaaaaaaaaa",conversesion)

  useEffect(() => {
    getConversationDetails();
  }, [person.sub]);
  return (
    <>
      <ChatBoxHeader person={person} />
      <ChatBoxMessage person={person} conversesion={conversesion}/>
    </>
  );
}
export default ChatBox;
