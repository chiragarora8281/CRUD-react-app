import { useState } from "react"
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import CourseService from './../../services/CourseService';
import toast from "react-hot-toast";

const CreateCourse = () => {
  let navigate = useNavigate();
  let [state, setState]=useState({
    title:"",
    trainer:"",
    description:"",
    createdAt:"",
    isLoading:false,
  });
let{title, trainer, isLoading, description, createdAt}=state;

let handleChange= e =>{
  let {name, value}=e.target;
  setState({...state, [name]:value})
}


let handleSubmit = async e =>{
  e.preventDefault();
  try{
    let payload={title, trainer, description, createdAt};
    // await axios.post("http://localhost:5000/courses", payload)

    CourseService.createService(payload);
    toast.success('successfully course has been created....')

    // //BUILD IN WINDOW FETCH API WITH POST
    // await window.fetch("http://localhost:5000/courses",{
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json",
    //   },
    //   body:JSON.stringify(payload),
    // });


    navigate("/"); //navigate to other page
  }catch(error){
    console.log(error);
  }
}

  return (
    <section className="content">
    <main className="authBlock">
      <h1>Create Course</h1>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title}  onChange={handleChange} required placeholder="enter title"/>
        </div>

        <div className="form-group">
        <label htmlFor="trainer">Trainer</label>
        <input type="text" name="trainer" value={trainer}  onChange={handleChange} required placeholder="enter trainer"/>
        </div>

        <div className="form-group desc_block">
        <label htmlFor="description">description</label>
        <textarea type="text" name="description" id="description" value={description} cols="10" rows="2" onChange={handleChange}/>
        </div>

        <div className="form-group at">
        <label htmlFor="createdAt">Course Created at</label>
        <input type="date" name="createdAt" id="createdAt" value={createdAt} onChange={handleChange} placeholder="enter date"/>
        </div>

        <div className="from-group1"> 
          <button>{isLoading ? 'loading' :'Create course'}</button>
        </div>
      </form>
    </main>
    </section>
  )
}

export default CreateCourse