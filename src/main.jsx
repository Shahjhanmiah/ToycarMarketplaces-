import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './Shared/Routes/Routes';
import AuthProvider from './Shared/Context/AuthProvider';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </React.StrictMode>,
)
