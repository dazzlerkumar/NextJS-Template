import { createContext, useState } from "react";

//Defining context
export const GlobalContext = createContext(undefined);

//Context Wrapper
export function GlobalDataProvider({ children }) {
    const [isAuth, setIsAuth] = useState({ token: 1213 });
    return (
        <GlobalContext.Provider
            value={{
                isAuth,
                setIsAuth,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
