import { useCallback, useContext ,createContext , useState ,ReactNode } from "react";


  interface ContextProviderProps {
    children: ReactNode;
  }

const StateContext  = createContext({
   user: null,
   token: null,
   lastFiveNews: null,
   setLastFiveNews: ()=>{},
   setUser: ()=>{},
   setToken: ()=>{}
});

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<null | null>(null);
    const [lastFiveNews, setLastFiveNews] = useState(null);
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
        <StateContext.Provider value={{user, token, setUser, setToken ,setLastFiveNews , lastFiveNews}}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);