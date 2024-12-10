import { useCallback, useContext ,createContext , useState} from "react";
const StateContext  = createContext({
   user: null,
   token: null,
   setUser: ()=>{},
   setToken: ()=>{}
});

export const ContextProvider =({children})=>{
    const [user, setUser] = useState(null);
    const [token, _setToken] = useState(localStorage.getItem('token') ?? null);

    const setToken = useCallback((token: string) => {
        _setToken(token);
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, []);

    return (
        <StateContext.Provider value={{user, token, setUser, setToken}}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);