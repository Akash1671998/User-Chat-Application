
import { createContext, useState } from "react";



export const AccountContex = createContext(null);



const AccountProvider =({children})=>{
    const [state,setState]=useState("");
    return(
        <AccountContex.Provider value={{state,setState}}>
        {children}
        </AccountContex.Provider>
    )
}
export default AccountProvider