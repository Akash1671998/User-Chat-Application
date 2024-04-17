import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import styled from "@emotion/styled";

function ChatSearch() {
  const MainBox = styled(Box)({
    background: "#fff",
    height: "45px",
    borderBottom: "1px solid #F2F2F2",
    display:'flex',
    alignItems:'center',
    marginTop:'10px'
  });

  const SecondBox = styled(Box)({
    display: "flex",
    alignItem: "center",
    backgroundColor:'#f0f2f5',
    position:'relative',
    margin:'0 13px',
    width:'100%',
    borderRadius:'10px',

  });

  const SearchIcondBox = styled(Box)({
    position: "obsolute",
    height: "100%",
    padding: "12px 7px",
    color: "#919191",
  });

  const InputeField = styled(InputBase)({
    width: "100%",
    padding: "16px",
    height:'50px',
    paddingLeft:'55px',
    fontSize:'14px',
  });
  return (
    <>
      <MainBox>
        <SecondBox>
          <SearchIcondBox>
            <SearchIcon />
          </SearchIcondBox>
          <InputeField placeholder="Search or Start New Chat" />
        </SecondBox>
      </MainBox>
    </>
  );
}
export default ChatSearch;
