import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import FormateDate from "./FormateDate/FormateDate";
import { useContext } from "react";
import { AccountContex } from "../../../contex";
import GetAppIcon from "@mui/icons-material/GetApp";

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
function ShowUserMessage({ data, fileNameLink }) {
  const { loginuser } = useContext(AccountContex);
  let LogUserId = loginuser?.sub;

  const messageDate = data?.createdAt;

  return (
    <>
      {LogUserId === data.senderId ? (
        <MainBox>
          {/* {data ? <TextMessage data={data} /> :   <ImageMessage data={fileNameLink}/>} */}
          {data.type === "text" ? (
            <TextMessage data={data} />
          ) : (
            <ImageMessage data={fileNameLink} />
          )}
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

const TextMessage = ({ data }) => {
  return (
    <>
      <MessageText>{data.textmessage}</MessageText>
      <TimeText>{FormateDate(data?.createdAt)}</TimeText>
    </>
  );
};

const ImageMessage = ({ data }) => {
  return (
    <>
      <Box style={{ position: "relative" }}>
        <img
          src={data}
          alt={data}
          style={{ width: 300, height: "100%", objectFit: "cover" }}
        />
        <GetAppIcon style={{ position: "absulute" }} />
        <TimeText>{FormateDate(data?.createdAt)}</TimeText>
      </Box>
    </>
  );
};
export default ShowUserMessage;
