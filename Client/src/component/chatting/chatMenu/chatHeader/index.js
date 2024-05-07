import { Box, Tooltip, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AccountContex } from "../../../../contex";
import styled from "@emotion/styled";
import ChatIcon from "@mui/icons-material/Chat";
import LoopIcon from "@mui/icons-material/Loop";
import HeaderMenu from "./HeaderMenu";
import ProfileBox from "../../../saveProfileBox";

function ChatHeader() {
  const { loginuser } = useContext(AccountContex);

  const [openProfileBox,setOpenProfileBox]=useState(false);

  const handleOpenBox =()=>{
    setOpenProfileBox(true);
  }


  const MainBox = styled(Box)({
    height: "40px",
    background:"#1976d2",
    display: "flex",
    padding: "8px 16px",
    alignItems: "center",
  });

  const IconBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    "& > * ": {
      marginLeft: "2px",
      padding: "8px",
      color: "#000",
    },
    "& :first-child": {
      fontSize: "22px",
      marginRight: "8px",
      marginTop: "3px",
    },
  });

  const Image = styled("img")({
    height: 40,
    width: 40,
    borderRadius: "50%",
  });
  return (
    <>
      <MainBox>
        <Tooltip title={loginuser.name}>
        <Image
          src={loginuser.picture}
          alt="dp"
          height={40}
          width={40}
          style={{ borderRadius: "50%" }}
          onClick={()=>handleOpenBox()}
        />
        </Tooltip>
        <IconBox>
          <LoopIcon size="small" color="action" />
          <ChatIcon size="small" color="action" />
          <HeaderMenu  setOpenProfileBox={setOpenProfileBox}/>
        </IconBox>
        <ProfileBox openProfileBox={openProfileBox} setOpenProfileBox={setOpenProfileBox}/>
      </MainBox>
    </>
  );
}
export default ChatHeader;
