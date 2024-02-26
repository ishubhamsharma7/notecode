import { Navigate } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { userAtom } from "../store/user"


const ProtectedRoute = ({children}:any) => {

   
    const isUserLoggedIn = useRecoilValue(userAtom) 

    if(isUserLoggedIn){
        return (
        <div>
            {children}
        </div>
        )
    }

    return <Navigate to={'/signin'} />
}

export default ProtectedRoute