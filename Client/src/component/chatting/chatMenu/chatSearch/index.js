import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import styled from "@emotion/styled";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";

function ChatSearch({ text, setText }) {
  const MainBox = styled(Box)({
    background: "#fff",
    height: "45px",
    borderBottom: "1px solid #F2F2F2",
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  });

  const SecondBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f0f2f5",
    position: "relative",
    margin: "0 13px",
    width: "100%",
    borderRadius: "10px",
  });

  const SearchIcondBox = styled(Box)({
    position: "absolute",
    height: "100%",
    padding: "12px 7px",
    color: "#919191",
  });

  const InputeField = styled(InputBase)({
    width: "100%",
    padding: "16px",
    height: "50px",
    paddingLeft: "55px",
    fontSize: "14px",
  });

  const Closed = styled(Box)({
    display: "flex",
    alignItems: "center",
    position: "relative",
    color: "red",
  });

  const handleSearch = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <MainBox>
      <SecondBox>
        <SearchIcondBox>
          <SearchIcon />
        </SearchIcondBox>
        <InputeField
          placeholder="Search or start new chat"
          value={text}
          onChange={handleSearch}
        />
      </SecondBox>
      <Closed>
        {text && <ClearIcon fontSize="small" onClick={handleClear} />}
      </Closed>
    </MainBox>
  );
}

export default ChatSearch;
