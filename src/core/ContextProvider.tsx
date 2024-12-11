import { useCallback, useContext ,createContext , useState} from "react";

interface User {
    id: number
    name: string
    ar_name: string
    en_name: string
    email: string
    gander: string
    phone: string
    image: string
    birthday: string
    role: string
    permissions: string[]
    notification: any[]
    question_medicine: string
    graduation_year: string
    degree: string
    specialties: string
  }

const StateContext  = createContext({
   user: null,
   token: null,
   lastFiveNews: null,
   setLastFiveNews: (news: Array<T>[])=>{},
   setUser: (user: User)=>{},
   setToken: (token: string)=>{}
});

export const ContextProvider =({children})=>{
    const [user, setUser] = useState(null);
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