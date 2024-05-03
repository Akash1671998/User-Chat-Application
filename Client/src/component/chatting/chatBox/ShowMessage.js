import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import FormateDate, { DownloadFile } from "./FormateDate/FormateDate";
import { useContext, useEffect, useRef } from "react"; // Added useRef and useEffect
import { AccountContex } from "../../../contex";
import GetAppIcon from "@mui/icons-material/GetApp";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

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
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [data]);

  return (
    <>
      {LogUserId === data.senderId ? (
        <MainBox>
          {data.type === "text" ? (
            <TextMessage data={data} />
          ) : (
            <ImageMessage linkData={fileNameLink} data={data} />
          )}
        </MainBox>
      ) : (
        <SecondMainBox>
          {data.type === "text" ? (
            <TextMessage data={data} />
          ) : (
            <ImageMessage linkData={fileNameLink} data={data} />
          )}
        </SecondMainBox>
      )}
      <div ref={messageEndRef} /> 
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

const ImageMessage = ({ linkData, data }) => {
  return (
    <>
      <Box style={{ position: "relative" }}>
        {linkData && linkData.endsWith(".pdf") ? (
          <Box style={{ display: "flex" }}>
            <img src={PictureAsPdfIcon} alt="pdf-icon" style={{ width: 80 }} />
            <Typography style={{ fontSize: 14 }}>
              {linkData.split("/").pop()}
            </Typography>
          </Box>
        ) : (
          <img
            src={linkData}
            alt={linkData}
            style={{ width: 300, height: "100%", objectFit: "cover" }}
          />
        )}
        <TimeText style={{ position: "absolute", bottom: 0, right: 0 }}>
          <GetAppIcon
            onClick={(e) => DownloadFile(e, linkData)}
            fontSize="small"
            style={{
              marginRight: 10,
              border: "1px solid grey",
              borderRadius: "50%",
            }}
          />
          {FormateDate(data?.createdAt)}
        </TimeText>
      </Box>
    </>
  );
};

export default ShowUserMessage;
