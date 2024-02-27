import { useContext } from "react";
import { AuthContextApi } from "../context/AuthContext"; 
import { Navigate } from "react-router-dom";

const PublicRouter = ({children})=>{
    let {isAuth} = useContext(AuthContextApi)
    if(isAuth){
        return<Navigate to="/users" />
    }else{
        return<>{children}</>
    }
}

export default PublicRouter;