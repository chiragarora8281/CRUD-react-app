import { useParams, Link } from "react-router-dom"
import useFetchUser from "../../hooks/UserHook";
import { useEffect } from "react";
import Moment from "moment";
import Spinner from "../../pages/Spinner";


const SingleUser = () => {
  let {fetchSingleUser, users} = useFetchUser();
  let {id} = useParams();

  useEffect(()=>{
    fetchSingleUser(id)
   },[]);
   console.log(users.singleUser);
  //  let { eamail, avatar, createdAt, updatedAt, role, name} = singleUser;
   
  return (
    <>
    {users.singleUser === null ?( <Spinner/> ):( <div className="course_details">
    <header>
    <Link to={`/edit/${id}`} className="edit btn-help">edit</Link>
    <Link to="/" className="delete btn-help">delete</Link>
    <Link to="/users" className="back btn-help">Back</Link>
    <h2>{users?.singleUser?.name}</h2>
    </header>
     <main>
    <p>
      <span>email: </span>
      <span>{users?.singleUser?.email}</span>
      </p>
        <p>Role : {users?.singleUser?.role}</p>
    </main>
    <footer>
      <span className="date_create">Course Created At: <span>
          <strong>{Moment(users?.singleUser?.createdAt).fromNow()}</strong>
        </span>
      </span>
    </footer>
  </div>)}</>
  )
} 

export default SingleUser