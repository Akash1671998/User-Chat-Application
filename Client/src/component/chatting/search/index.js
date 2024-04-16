import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import styled from "@emotion/styled";

function ChatSearch() {
    const MainBox = styled(Box)({
        background:'#fff',
        height:'45px',
        borderBottom:'1px solid #F2F2F2'
    })

    const SecondBox = styled(Box)({
        position:'obsolute',
        height:'100%',
        padding:'8px',
        color:'#919191',
        display:'flex',
        alignItem:'center',


    })

    const SearchIcondBox = styled(Box)({

    })

    const InputeField = styled(InputBase)({
        width:'100%',
        padding:'16px',

    })
  return (
    <>
      <MainBox>
        <SecondBox>
          <SearchIcondBox>
            <SearchIcon />
          </SearchIcondBox>
          <InputeField placeholder="Search or Start New Chat"/>
        </SecondBox>
      </MainBox>
    </>
  );
}
export default ChatSearch;
