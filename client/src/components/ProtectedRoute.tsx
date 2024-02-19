import { Navigate } from "react-router-dom"


const ProtectedRoute = ({children}:any) => {

const user = true
    if(user){
        return (
        <div>
            {children}
        </div>
        )
    }

    return <Navigate to={'/signin'} />
}

export default ProtectedRoute