
import { createBrowserRouter } from 'react-router-dom';
import MainApp from './../Components/MainApp';
import Home from './../Pages/Home/Home';
import About from './../Pages/About/About';
import Product from './../Pages/Product/Product';
import DashBoard from './../Pages/DashBoard/DashBoard';
import Edit from '../Pages/DashBoard/Edit';
import Profile from '../Pages/DashBoard/Profile';










const myCreateRoute = createBrowserRouter([
    {
      path:'/',
      element:<MainApp></MainApp>,
      children:[
        {
          path:'/home',
          element:<Home></Home>
      
        },
       
        {
          path:'/product',
          element:<Product></Product>,
          loader:()=>fetch(`https://dummyjson.com/products`)
      
        },
        {
          path:'/products/:Id',
          element:<About></About>,
          loader:({params})=>fetch(`https://dummyjson.com/products/${params.Id}`)
      
        },
        {
          path:'/dashboard',
          element:<DashBoard></DashBoard>,
          children:[
          {
            path:'/dashboard/profile',
            element:<Profile></Profile>
          },
          {
            path:'/dashboard/editProfile',
            element:<Edit></Edit>
          }
        
        ]
      
        }
      ]
  
    },
  
  ])

export default myCreateRoute;