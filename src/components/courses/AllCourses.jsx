import { Fragment, useEffect, useState , useContext} from "react"
import Spinner from "../../pages/Spinner";
import Course from "./Course";
// import axios from "axios";
import CourseService from "../../services/CourseService";
import SearchCourses from "../searchFilter/SearchCourses";
import useFetchUser from "../../hooks/UserHook";
// import { userContextApi } from "../../context/UserContext";
import SingleUser from './../users/SingleUser';

const AllCourses = () => {
  // let {users, fetchUsers}= useContext(userContextApi);
  // console.log(users);
 
  
  let[state, setState] = useState(null)
  let [searchTerm , setSearchterm]= useState("");
  let fetchCourses = async ()=>{
    // let {data} = await axios.get("http://localhost:5000/courses");
    let data = await CourseService.fetchService();
    setState(data);
  };

  let handleSearch = (term) => {
    setSearchterm(term)
  }

  useEffect(()=>{
    fetchCourses();
    // fetchUsers();
  },[]);
   let FilteredCourse = state?.filter(val =>{
      if(searchTerm === ""){
        return val;
      }else if(val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
        return val
      }
   }).map(course =>(<Course key={course.id} {...course}/>))
  
  return (
    <Fragment>
      <SearchCourses handleSearch={handleSearch}/>
    <h2>All course</h2>
    <div className="courses">
      {state ===  null ? <Spinner/>: FilteredCourse}
         
      
    </div>
    </Fragment>
  )
}

export default AllCourses