import React, { useState, useEffect } from "react";
import { getChatUser } from "../../../../service/api";
import ChatConvesationUser from "./chatConversationUser";
import { Box, Divider } from "@mui/material";
import { useContext } from "react";
import { AccountContex } from "../../../../contex";
import styled from "@emotion/styled";

function Conversations() {
  const { state } = useContext(AccountContex);
  const [users, setUsers] = useState([]);

  const Component = styled(Box)({
    overflow: "overlay",
    height: "81vh",
  });

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await getChatUser();
        setUsers(response);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, []);

  return (
    <Component>
      {users.map(
        (user) =>
          user.sub !== state.sub && (
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
