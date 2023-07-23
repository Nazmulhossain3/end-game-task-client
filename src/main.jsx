import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Component/Main';
import Home from './Pages/Home/Home';
import Colleages from './Pages/Collages/Colleages';
import Admission from './Pages/Admission/Admission';
import MyColleage from './Pages/MyColleage/MyColleage';
import CollageDetails from './Pages/Home/CollageDetails';
import AllCollageDetails from './Pages/Collages/AllCollageDetails';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [{
      path : '/',
      element : <Home></Home>,
  },
  {
    path : '/colleges',
    element : <Colleages></Colleages>
  },
  {
    path : '/admission',
    element : <Admission></Admission>
  },
  {
    path : '/myCollage',
    element : <MyColleage></MyColleage>
  },
  {
    path : '/collage/:id',
    element : <CollageDetails></CollageDetails>,
    loader : ({params})=> fetch(`http://localhost:5000/collage/${params.id}`)
    
    
  },
  {
    path : '/allCollage/:id',
    element : <AllCollageDetails></AllCollageDetails>,
    loader : ({params}) => fetch(`http://localhost:5000/allCollage/${params.id}`)
  },
  {
    path : '/login',
    element : <Login></Login>
  },
  {
    path : '/register',
    element : <Register></Register>
  }




  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
