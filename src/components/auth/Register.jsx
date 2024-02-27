import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContextApi } from "../../context/AuthContext";

const Register = () => {
    let { signup } = useContext(AuthContextApi);
  let navigate = useNavigate();
  let [state, setState]=useState({
    name:"",
    email:"",
    password:"",
    avatar:"",
    isLoading:false,
  });
let{name, email, password, avatar, isLoading}=state;

let handleChange= e =>{
  let {name, value}=e.target;
  setState({...state, [name]:value})
}


let handleSubmit = async e =>{
  e.preventDefault();
  try{
    let payload={name, email, password, avatar};
    signup(payload)
    console.log(payload);
    toast.success('successfully registered')
    navigate("/login"); 
  }catch(error){
    console.log(error);
  }
}

  return (
    <section className="content">
    <main className="authBlock">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name}  onChange={handleChange} required placeholder="enter name"/>
        </div>

        <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={email}  onChange={handleChange} required placeholder="enter email"/>
        </div>

        <div className="form-group desc_block">
        <label htmlFor="password">password</label>
        <input type="password" name="password" value={password}  onChange={handleChange} required placeholder="enter password"/>
        </div>

        <div className="form-group at">
        <label htmlFor="createdAt">Avatar url</label>
        <input type="url" name="avatar" id="avatar" value={avatar} onChange={handleChange} placeholder="enter avatar url"/>
        </div>

        <div className="from-group1"> 
          <button>{isLoading ? 'loading' :'Register'}</button>
        </div>
      </form>
    </main>
    </section>
  )
}

export default Register