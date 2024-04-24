import React from "react";
import UserLogin from "./account/userLogin";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled";
import { useContext } from "react";
import { AccountContex } from "../contex";
import Chatting from "./chatting/chatting";

const MainBox = styled(Box)({
  height: "100vh",
  backdropFilter: "#DCDCDC",
});

const ChatHeader = styled(AppBar)({
    height: "120px",
    boxShadow: "none",
    backgroundColor:'#1976d2',
  });
const Header = styled(AppBar)({
  height: "220px",
  boxShadow: "none",
  // backgroundColor:'#00bfa5',
});

function Message() {
  const { loginuser } = useContext(AccountContex);


  return (
    <MainBox sx={{ flexGrow: 1 }}>
      {loginuser ? (
        <>
          <ChatHeader position="static">
            <Toolbar variant="dense">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
            </Toolbar>
          </ChatHeader>
         <Chatting />
        </>
       
      ) : (
        <>
          <Header position="static">
            <Toolbar variant="dense">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
              <Typography variant="h6" color="inherit" component="div">
                <UserLogin />
              </Typography>
            </Toolbar>
          </Header>
        </>
      )}
    </MainBox>
  );
}

export default Message;
