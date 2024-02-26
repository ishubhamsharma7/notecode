import { Navigate } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { userAtom } from "../store/user"
import { useEffect } from "react"
import {useCookies } from 'react-cookie'


const ProtectedRoute = ({children}:any) => {

    const [cookie,setCookie] = useCookies(['token'])

    console.log("===>cookie",cookie)
const isUserLoggedIn = useRecoilValue(userAtom) 
    // useEffect(() => {
    //   if()
    // }, []);
    console.log("====>",isUserLoggedIn)
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