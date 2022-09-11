import { createContext, useState } from "react";

export const contexto = createContext();
const Provider = contexto.Provider;

export const UserContext = ({children}) => {

    const [ loggedIn, setLoggedIn ] = useState(false);

    const changeLogin = (bool) => {
        setLoggedIn(bool);
    }

    const valorContexto = {
        loggedIn : loggedIn,
        changeLogin
    }

    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}