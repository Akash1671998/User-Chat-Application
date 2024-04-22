import ChatBoxFooter from "./ChatBoxFooter";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxMessage from "./ChatBoxMessage";
import { useContext } from "react";
import { AccountContex } from "../../../contex";

function ChatBox() {
  const {person}=useContext(AccountContex);
  return (
    <>
      <ChatBoxHeader person={person}/>
      <ChatBoxMessage person={person}/>
    </>
  );
}
export default ChatBox;
