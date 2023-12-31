import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './Shared/Routes/Routes';
import AuthProvider from './Shared/Context/AuthProvider';






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
