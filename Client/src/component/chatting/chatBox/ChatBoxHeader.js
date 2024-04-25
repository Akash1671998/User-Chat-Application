import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AccountContex } from "../../../contex";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBoxMoreMenu from "./ChatBoxMoreMenu";

function ChatBoxHeader({ person }) {
  const { loginuser } = useContext(AccountContex);
  const [userStatus, setUserStatus] = useState("Offline");

  useEffect(() => {
    if (loginuser) {
      setUserStatus("Online");
    } else {
      setUserStatus("Offline");
    }
  }, [loginuser]);

  const Header = styled(Box)({
    height: "44px",
    background: "#ededed",
    display: "flex",
    padding: "8px 16px",
    alignItems: "center",
  });

  const Image = styled("img")({
    width: 40,
    height: 40,
    objectFit: "cover",
    borderRadius: "50%",
  });

  const RightContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    "& > svg": {
      padding: "8px",
      fontSize: "22px",
      color: "#000",
    },
  });

  const Name = styled(Typography)`
    marginleft: 12px !important;
  `;

  const UserStatus = styled(Typography)({
    fontSize: "12px !important",
    color: "#000000",
    marginLeft: "12px !important",
  });

  return (
    <>
      <Header>
        <Image src={person.picture} alt="dp" />
        <Box>
          <Name>{person.name}</Name>
          <UserStatus>{userStatus}</UserStatus>
        </Box>
        <RightContainer>
          <SearchIcon />
          {/* <MoreVertIcon /> */}
          <ChatBoxMoreMenu />
        </RightContainer>
      </Header>
    </>
  );
}
export default ChatBoxHeader;
