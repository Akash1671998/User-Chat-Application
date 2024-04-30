import React, { useState, useEffect } from "react";
import { getChatUser } from "../../../../service/api";
import ChatConvesationUser from "./chatConversationUser";
import { Box, Divider } from "@mui/material";
import { useContext } from "react";
import { AccountContex } from "../../../../contex";
import styled from "@emotion/styled";

function Conversations({text}) {
  const { loginuser } = useContext(AccountContex);
  const [users, setUsers] = useState([]);

  const Component = styled(Box)({
    overflow: "overlay",
    height: "81vh",
    background: "#546e7a",
  });

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await getChatUser();
        let finterData = response.filter(item=>item.name.toLowerCase().includes(text.toLowerCase()))
        setUsers(finterData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, [text]);

  return (
    <Component>
      {users.map(
        (user) =>
          user.sub !== loginuser.sub && (
            <>
              <ChatConvesationUser user={user} />
              <Divider
                style={{
                  margin: "0px 0px 0px 70px",
                  background: "#e9edef",
                  opacity: ".6",
                }}
              />
            </>
          )
      )}
    </Component>
  );
}

export default Conversations;
