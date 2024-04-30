import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import FormateDate from "./FormateDate/FormateDate";
import { useContext } from "react";
import { AccountContex } from "../../../contex";

const MainBox = styled(Box)({
  background: "#26a69a",
  maxWidth: "30%",
  marginLeft: "auto",
  padding: "5px",
  width: "fit-content",
  display: "flex",
  borderRadius: "10px",
  wordBreak: "break-word",
  marginTop: "15px",
  marginRight: "25px",
});

const SecondMainBox = styled(Box)({
  background: "#607d8b",
  padding: "5px",
  maxWidth: "60%",
  width: "fit-content",
  display: "flex",
  borderRadius: "10px",
  wordBreak: "break-word",
  marginTop: "15px",
  marginLeft: "25px",
});

const MessageText = styled(Typography)({
  fontSize: "14px",
  padding: "0px 25px 0px 5px",
});

const TimeText = styled(Typography)({
  fontSize: "12px",
  color: "#212121",
  marginTop: "6px",
  wordBreak: "keep-all",

});
function ShowUserMessage({ data }) {
  const { loginuser } = useContext(AccountContex);
  let LogUserId = loginuser?.sub;

  const messageDate = data?.createdAt;

  return (
    <>
      {LogUserId === data.senderId ? (
        <MainBox>
          <MessageText>{data.textmessage}</MessageText>
          <TimeText>{FormateDate(messageDate)}</TimeText>
        </MainBox>
      ) : (
        <SecondMainBox>
          <MessageText>{data.textmessage}</MessageText>
          <TimeText>{FormateDate(messageDate)}</TimeText>
        </SecondMainBox>
      )}
    </>
  );
}

export default ShowUserMessage;
