import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { AccountContex } from "../../contex";
import styled from "@emotion/styled";

const ImageBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
});
const Image = styled("img")({
  height: 200,
  width: 200,
  borderRadius: "50%",
  padding: "25px opx",
});

const ProfileName = styled(Box)({
  background: "#FFFFFF",
  padding: "12px 30px 2px",
  boxShadow: "0 1px 3px rgba(0, 0,0,0,0.08)",

  "& : first-child": {
    fontSize: "13px",
    color: "#009688",
    fontWeight: "200",
  },
  "& : last-child": {
    margin: "14px 0",
    color: "#4A4A4A",
  },
});

const DiscriptionBox = styled(Box)({
    padding:'15px 20px 28px 30px',
    '& > p ':{
        fontSize:'13px',
        color:'#9696a0'
    }
})

const AboutBox = styled(Box)({
    background: "#FFFFFF",
    padding: "12px 30px 2px",
    boxShadow: "0 1px 3px rgba(0, 0,0,0,0.08)",
  
    "& : first-child": {
      fontSize: "13px",
      color: "#009688",
      fontWeight: "200",
    },
    "& : last-child": {
      margin: "14px 0",
      color: "#4A4A4A",
    },
})
function Profile({}) {
  const { state } = useContext(AccountContex);
  return (
    <>
      <ImageBox>
        <Image src={state.picture} alt="dp" style={{ borderRadius: "50%" }} />
      </ImageBox>
      <ProfileName>
        <Typography>Your Name</Typography>
        <Typography>{state.name}</Typography>
      </ProfileName>
      <DiscriptionBox>
        <Typography>
          This Is not your username OR PIN This Name will be visible to your
          Chat Application Contact
        </Typography>
      </DiscriptionBox>
      <AboutBox>
      <Typography>About</Typography>
        <Typography>Eat! Sleep! Code! Repeate!</Typography>
      </AboutBox>
    </>
  );
}
export default Profile;
