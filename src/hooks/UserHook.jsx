import { useEffect } from 'react';
import { userContextApi } from './../context/UserContext';
import { useContext } from 'react';

//custome Hook
const useFetchUser = () => {
    let {users, fetchUsers, fetchSingleUser, singleUser} = useContext(userContextApi)
    useEffect(()=> {
           fetchUsers();
        },[]);
    let data = {users, fetchSingleUser, singleUser};
    return data;
}
export default useFetchUser;