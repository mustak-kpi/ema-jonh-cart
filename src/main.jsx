import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './componets/Shop/Shop.jsx';
import Home from './componets/layout/Home.jsx';
import Order from './componets/Order/Order.jsx';
import Inventory from './componets/Inventory/Inventory.jsx';
import Login from './componets/Login/Login.jsx';
import cartloderdata from './Loder/cartloderdata.js';
import Checkout from './componets/Checkout/Checkout.jsx';
import SingeUp from './componets/SingeUP/SingeUp.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrevietRputer from './Router/PrevietRputer.jsx';
 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'order',
        element: <Order></Order>,
        loader: cartloderdata
      },
      {
        path: 'chackout',
        element: <PrevietRputer><Checkout></Checkout></PrevietRputer>
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'singUp',
        element: <SingeUp></SingeUp>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router}/>
  </AuthProvider>
  </React.StrictMode>,
)
