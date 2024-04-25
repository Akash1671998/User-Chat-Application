import * as React from "react";
import {Menu , MenuItem}from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import styled from "@emotion/styled";

const MenuOption = styled(MenuItem)({
  fontSize: "14px",
  padding: "15px 60px 5px 24px",
  color: "#4A4A4A",
});
function ChatBoxMoreMenu({setOpenProfileBox}) {
  const [open, setOpen] = useState(null);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };

  const handleOpenProfileBox =()=>{
    setOpenProfileBox(true)
  }

  return (
    <div>
      <MoreVertIcon
        id="basic-button"
        size="small"
        color="action"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={open}
        open={open}
        onClose={handleClose}
        keepMounted
        getContentAnchorE1={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={()=>handleOpenProfileBox()}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
export default ChatBoxMoreMenu;
