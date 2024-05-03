
import { createContext, useEffect, useRef, useState } from "react";
import { io } from 'socket.io-client';
export const AccountContex = createContext(null);

const AccountProvider =({children})=>{
    // const [state,setState]=useState("");
    const [loginuser,setLoginUser]=useState("");
    const [person,setPerson]=useState({});
    const [ActiveUser,setActiveUser]=useState([]);


    const socket = useRef();
    useEffect(() => {
        socket.current = io('ws://localhost:8070');
    }, [])

    return(
        <AccountContex.Provider value={
            {
                // state,
                // setState,
                person,
                setPerson,
                loginuser,
                setLoginUser,
                socket,
                ActiveUser,
                setActiveUser,
                }
                }>
        {children}
        </AccountContex.Provider>
    )
}
export default AccountProvider