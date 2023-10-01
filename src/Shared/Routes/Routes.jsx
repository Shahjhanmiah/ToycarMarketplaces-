import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../Home/Home";
import Register from "../Register/Registe";
import Login from "../Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
  
        {
          path:'/',
          element:<Home></Home>
          
        },
  
        {
          path:'/Register',
          element:<Register></Register>
          
        },
        {
          path:'/login',
          element:<Login></Login>
          
        }
  
      ]
    },
  ]);
export default router  