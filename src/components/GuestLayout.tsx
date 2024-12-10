import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../core/ContextProvider";

export default function GuestLayout(){

    const {token} = useStateContext();

    if(token){
     return <Navigate to="/" />
    }
    return (
      <section>
        <Outlet/>
      </section>
    );
}