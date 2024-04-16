import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { AccountContex } from "../../../../contex";
import styled from "@emotion/styled";
import ChatIcon from "@mui/icons-material/Chat";
import LoopIcon from "@mui/icons-material/Loop";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function ChatHeader() {
  const { state } = useContext(AccountContex);
  const MainBox = styled(Box)({
    height: "44px",
    background: "whitesmoke",
    padding: "8px 16px",
    display:'flex',
    alignItems:'center',
  });

  const IconBox = styled(Box)({
    marginLeft:'auto',
    // justifyContent:'end'
    '& > * ':{
        marginLeft:'3px',
        padding:'8px',
        color:'#000'
    },
    // '& :first-child':{
    //     fontSize:'22px',
    //     marginLeft:'8px',
    //     marginTop:'3px',
    // },
  })

  return (
    <>
      <MainBox>
        <img
          src={state.picture}
          alt="dp"
          height={40}
          width={40}
          style={{ borderRadius: "50%" }}
        />
        <IconBox>
        <LoopIcon size="small" color="action" />
        <ChatIcon size="small" color="action" />
        <MoreVertIcon size="small" color="action" />
        </IconBox>
      </MainBox>
    </>
  );
}
export default ChatHeader;
