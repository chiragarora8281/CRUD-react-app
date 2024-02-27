import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layouts from "./pages/Layouts"
import Home from "./pages/Home"
import NotFound from './pages/NotFound';
import CreateCourse from "./components/courses/CreateCourse";
import AllCourses from "./components/courses/AllCourses";
import CourseDetails from "./components/courses/CourseDetails";
import EditCourse from './components/courses/EditCourse';
import AllUsers from "./components/users/Allusers";
import SingleUser from "./components/users/SingleUser";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRouter from './helpers/PrivateRoute';
import PublicRouter from "./helpers/PublicRouter";

import Modal from './helpers/modals/Modal';
import axios from "axios";
import FetchGitUsers from "./components/users/FetchGitUsers";
import CreateProduct from "./components/products/CreateProduct";

const router= createBrowserRouter([
  {
    path:'/',
    element:<Layouts/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        children:[
          {
            index:true,
            element:<AllCourses/>
          },
          {
            path:"create-course",
            element:(
            <PrivateRouter>
              <CreateCourse/>
            </PrivateRouter>
            ),
          },
          {
            path:"git-users",
            element:(
            <PrivateRouter>
              <FetchGitUsers/>
            </PrivateRouter>
            ),
            loader: async() =>{
              let {data} = await axios.get("https://api.github.com/users");
              return data;
            },
          },
          //data api with mutation/create or update
          {
            path:"/create-product",
            element:(
            <PrivateRouter>
              <CreateProduct/>
            </PrivateRouter>
            ),
            action: async({request}) =>{
              let data = await request.formData();
              console.log(data)
              let name = data.get("name");
              let email = data.get("email");
              let password = data.get("password")
              let avatar = data.get("avatar");
              let payload = {name, email, password, avatar};
              return await window.fetch(
                "https://api.escuelajs.co/api/v1/users", {
                  method:"POST",
                  body: JSON.stringify(payload),
                  headers:{
                    "Content-Type":"application/json",
                  },
                }
              );
            }
          },
          {
            path:":id",
            element:
            <PrivateRouter>
                <CourseDetails/>
            </PrivateRouter>
          },
          {
            path:"/edit/:id",
            element:
            <PrivateRouter>
                <EditCourse/>
            </PrivateRouter>
            
          },
          {
            path:"users",
            element:
            <PrivateRouter>
              <AllUsers/>
              </PrivateRouter>
          },
          {
            path: "/users/:id",
            element:
            <PrivateRouter>
              <SingleUser/>
              </PrivateRouter>,
          }
        ]
      },
      {
        path:"/signup",
        element:
        <PublicRouter>
           <Register/>
        </PublicRouter>
       
      },
      {
        path:"/login",
        element:
        <PublicRouter>
          <Modal>
          <Login/>
          </Modal>
        </PublicRouter>
        
      },
      {
        path:"*",
        element:<NotFound/>
      },
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}>App</RouterProvider>
  )
}

export default App