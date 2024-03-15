import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AdminReg from './pages/AdminReg.jsx'
import DepartmentReg from './pages/DepartmentReg.jsx'
import AdminDash from './pages/AdminDash.jsx'
import DepartmentDash from './pages/DepartmentDash.jsx'
import { Provider } from 'react-redux'
import store from './utlis/store.js'
import DashMain from './component/DashMain.jsx'
import Works from './pages/Works.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },{
    path:"/adminAuth",
    element:<AdminReg/>
  },{
    path:"/departmentAuth",
    element:<DepartmentReg/>
  },{
    path:"/adminDashBoard",
    element:<AdminDash/>
  },{
    path:"/departmentDashBoard",
    element:<DepartmentDash/>,
    children:[{
      path:"/departmentDashBoard/addWork",
      element:<DashMain/>
    },
    {
      path : "/departmentDashBoard",
      element:<Works />
    }]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(


  
  <React.StrictMode>
    <Provider store={store} >
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
