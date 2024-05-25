import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}) 
    {
        const [user_info, setUserInfo] = useState({})
        return (
        <UserContext.Provider value={{user_info, setUserInfo}}>
            {children}
        </UserContext.Provider>
    );
    }