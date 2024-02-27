import { useLoaderData, useNavigation } from "react-router-dom"
import Spinner from "../../pages/Spinner";
import { Fragment } from "react";
const FetchGitUsers = () => {
    let {state} = useNavigation();
    let users = useLoaderData();
    return (
        <>
        {
            state === 'loading' ?  <Spinner/> :
            users?.map(user =>{
                return <Fragment key={user.id}>
                    <picture>
                        <img src={user.avatar_url} alt={user.login} height={200} width={200}/>
                    </picture>
                </Fragment>
            })
        }
        </>
    )   
}

export default FetchGitUsers