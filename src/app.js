// import React from "react";
import ReactDOM from 'react-dom/client'
import Head from './components/Head';
import {Body} from './components/Body'
import {Footer} from './components/Footer'
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';

import RestaurantMenu from './components/RestaurantMenu';

let root=ReactDOM.createRoot(document.getElementById('root'));

let App=()=>{
    return (
        <div>
        <Head/>
        <Outlet/>
        </div>
    )
}
 let router=createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
             {
                path:"/",
                element:<Footer/>
            },
           {
                path:"/Restaurant/:RestID",
                element:<RestaurantMenu/>

            }
        ]
    }
    
])

root.render(<RouterProvider router={router} />)