// import React from "react";
import ReactDOM from 'react-dom/client'
import {Head} from './components/Head'
import {Body} from './components/Body'
import {Footer} from './components/Footer'
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import store from '../utils/store';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';
import userContext from '../utils/userContext';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
// import About from './components/About';
let About=lazy( ()=>import("./components/About"));
let root=ReactDOM.createRoot(document.getElementById('root'));

let App=()=>{

    let [name,setName]=useState("");
    useEffect(()=>{
        const data={
            Name:"Mummy"
        }
        setName(data.Name)
    },[])

    console.log(store)
    return (

<Provider store={store}>
        <div>

        <Head/>

        <Outlet/>
        </div>
</Provider>

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

            },{
                path:"/about",
                element:<Suspense fallback={<h1>Hello Suspense</h1>}>
                 <About/>
                </Suspense>
            },{
                 path:"/cart",
                element:<Suspense fallback={<h1>Hello Suspense</h1>}>
                 <Cart/>
                </Suspense>
            }
        ]
    }
    
])

root.render(<RouterProvider router={router} />)