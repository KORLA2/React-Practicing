import { useContext } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext";
// import { Link } from "react-router-dom";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";

 export let Head=()=>{

    let onlineStatus=useOnlineStatus();

    // let {LoggedUser}=useContext(userContext);
    let LoggedUser=useSelector(store=>store.cart.Name)
    console.log(LoggedUser)
     let cart= useSelector(store=>store.cart)

return(   
<div className="flex justify-between items-center border-2 border-red-900 bg-[rgb(172,233,255)] shadow-md m-1 p-2 sm:bg-green-200 lg:bg-red-400">     
<div>
<img  className="w-20" src="https://i.pinimg.com/736x/8b/78/d4/8b78d4f191990af2dbedcf9c30480581.jpg"/>
</div>
<ul className="flex justify-between items-center  p-2 ">
    <li className="m-2">Online Status{onlineStatus?"✅":"🔴"}</li>
   
   <Link to="/">
  <li className="m-2">Home</li>
   </Link> 
   <Link to="/about">
             <li className="m-2">About</li>
   </Link> 
      
        <Link to="/cart">
    <li className="m-2 font-bold text-2xl">
       
              Cart ({cart.items.length})
        </li>
   </Link> 
    <li className="m-2">Profile</li>
    <li className="m-2">{LoggedUser}</li>
</ul>

    </div>
)}
