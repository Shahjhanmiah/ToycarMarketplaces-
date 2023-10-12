import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../Home/Home";
import Register from "../Register/Registe";
import Login from "../Login/Login";
import Shopbycategory from "../../Gallery_Section/Shop by category/Shopbycategory";
import Shopid from "../../Gallery_Section/Shop by category/Shopid";
import AllToys from "../../Gallery_Section/All Toys/AllToys";
import MyToys from "../../Gallery_Section/All Toys/MyToys/MyToys";
import AddAToy from "../../Gallery_Section/All Toys/Add A Toy/AddAToy";
import ShopDetails from "../../Gallery_Section/Shop by category/ShopDetails";
import PrivateRoute from "../Context/PrivateRoute";
import Logout from "../../Comment/Logout";
import AllToysDetailspage from "../../Gallery_Section/All Toys/AllToysDetailspage";
import UpdateToy from "../../Gallery_Section/All Toys/UpdateToy";


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
          path:'/Shopbycategory',
          loader:()=>fetch('https://toy-car-server.onrender.com/userToy'),
          element:<Shopbycategory></Shopbycategory>
       
        },

       
  
        {
          path:'/Register',
          element:<Register></Register>
          
        },
        {
          path:'/login',
          element:<Login></Login>
          
        },
        {
          path:'/logout',
          element:<Logout></Logout>
          
        },
        {
          path:'/alltoys',
          element:<PrivateRoute><AllToys></AllToys></PrivateRoute>
          
        },
        {
          path:'/mytoys',
          loader: ()=> fetch('https://toy-car-server.onrender.com/postadd'),
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
          
        },
        {
          path:'/addaToys',
          element:<AddAToy></AddAToy>
          
        },
        {
          path:'/Shopid',
          // loader: ({params}) => fetch(`https://toy-car-server.onrender.com/userToy/${params.id}`),
          element:<Shopid></Shopid>
        },
        {
          path:'/shopdetais/:id',
          loader: ({params}) => fetch(`https://toy-car-server.onrender.com/userToyid/${params.id}`),
          element:<PrivateRoute><ShopDetails></ShopDetails></PrivateRoute>
        },
        {
          path:'/alltoysdeatils/:id',
          loader: ({params}) => fetch(`https://toy-car-server.onrender.com/userToyAll/${params.id}`),
          element:<AllToysDetailspage></AllToysDetailspage>
         
        },
        {
          path:'/updateToy/:id',
          loader: ({params}) => fetch(`https://toy-car-server.onrender.com/postadd/${params.id}`),
          element:<UpdateToy></UpdateToy>

         
        },
        {
          path:'/update',
          element:<UpdateToy></UpdateToy>
        }

       


  
      ]
    },
  ]);
export default router  