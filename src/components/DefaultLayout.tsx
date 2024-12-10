import {Outlet , Navigate} from 'react-router-dom';
import { useStateContext } from '../core/ContextProvider';
export default function DefaultLayout(){

    const {token} = useStateContext();

    if(!token){
      return  <Navigate to="/login" />
    }
    return (
        <div>
            <header>
                header
            </header>
            <div>
                
            </div>

            <main>
                <Outlet />
            </main>
        </div>
    )
}