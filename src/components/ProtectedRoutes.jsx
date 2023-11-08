import {  useSelector } from "react-redux/es/hooks/useSelector"
import { Navigate } from "react-router-dom"
function ProtectedRoutes({children}) {

    const { user } = useSelector((state) => state.like)

    if(user){
        return children
    }
    else {
return <Navigate to="/login" />
    }

    return (
        <div>ProtectedRoutes</div>
    )
}

export default ProtectedRoutes