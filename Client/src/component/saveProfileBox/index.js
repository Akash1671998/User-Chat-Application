import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Profile from "./Profile";

function ProfileBox({ openProfileBox, setOpenProfileBox }) {
  const DrawerStyle = {
    left: 20,
    top: 17,
    height: "95%",
    width: "30%",
    boxShadow: "none",
  };

  const DrawerHeader = styled(Box)({
    display: "flex",
    background: "#008069",
    height: "105px",
    // color:'#FFFFFF',
    "& > svg , & > p ": {
      marginTop: "auto",
      padding: "16px",
      fontSize: "20px",
      alignItems:'center'
    },
  });

  const DrawerComponent = styled(Box)({
    background: "#ededed",
    height: "85%",
  });
  const handleCloseBox = () => {
    setOpenProfileBox(false);
  };
  return (
    <>
      <Drawer
        open={openProfileBox}
        onClose={handleCloseBox}
        PaperProps={{ sx: DrawerStyle }}
        style={{ zIndex: 1500 }}
      >
        <DrawerHeader>
          {openProfileBox && (
            <KeyboardBackspaceIcon
              fontSize="medium"
              onClick={() => handleCloseBox()}
            />
          )}
          <Typography style={{fontSize:'18px'}}>Profile</Typography>
        </DrawerHeader>
        <DrawerComponent>
            <Profile/>
        </DrawerComponent>
      </Drawer>
    </>
  );
}
export default ProfileBox;
