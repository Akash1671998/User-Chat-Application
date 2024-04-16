import { Box, Dialog, Typography } from "@mui/material";

function Chatting() {
  const DialogStyle = {
    height: "90%",
    maxHeight: "100%",
    width: "100%",
    maxWidth: "100%",
    margin: "20px",
    boxShadow: "none",
    overflow: "none",
    border: "1px solid black",
    borderRedius: "0px",
  };

  return (
    <>
      <Dialog open={true} PaperProps={{ sx: DialogStyle }} hideBackdrop={true}>
        <Box>
          <Box></Box>

          <Box></Box>
        </Box>
      </Dialog>
    </>
  );
}
export default Chatting;
