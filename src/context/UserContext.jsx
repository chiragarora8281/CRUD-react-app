import { createContext, useReducer } from "react";
import userReducer from '../reducer/userReducer/userReducer'
import USER_API_INSTANCE from "../AxiosInstance/UserAxiosInstance";
export const userContextApi = createContext();
// import { useContext } from "react";
// import { useEffect } from "react";
const initialState = {
    users : null,
    singleUser:null,
    isLoading: true,
}

const Userprovider = ({children})=>{
    let [users, dispatch] = useReducer(userReducer, initialState)
    let fetchUsers = async() =>{
        try{
            let {data} = await USER_API_INSTANCE.get('/users');
            dispatch({type:"FETCH", users: data});
        }catch(error){
            console.log(error);
        }
    };

    const fetchSingleUser = async id =>{
        try{
            let {data} = await USER_API_INSTANCE.get(`/users/${id}`);
            console.log(data)
            dispatch({type:"SINGLE_USER" , singleUser:data})
        }catch(error){
            console.log(error);
        }
    }

    return(<userContextApi.Provider value={{users, fetchUsers, fetchSingleUser}}>
        {children}
    </userContextApi.Provider>) 
}



export default Userprovider;
// export let UseAllUsers = () =>{
//     const {users, fetchUsers} = useContext(userContextApi);
//     useEffect(()=>{
//         fetchUsers();
//     }, [])
//     return users
// };