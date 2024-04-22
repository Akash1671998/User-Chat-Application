
import { createContext, useState } from "react";



export const AccountContex = createContext(null);



const AccountProvider =({children})=>{
    const [state,setState]=useState("");
    const [person,setPerson]=useState({});
    return(
        <AccountContex.Provider value={
            {
                state,
                setState,
                person,
                setPerson
                }
                }>
        {children}
        </AccountContex.Provider>
    )
}
export default AccountProvider