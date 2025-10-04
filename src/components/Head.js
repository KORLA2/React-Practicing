import useOnlineStatus from "../../utils/useOnlineStatus";

let Head=()=>{

    let onlineStatus=useOnlineStatus()
return(   
<div className="flex justify-between items-center border-2 border-red-900 bg-[rgb(172,233,255)] shadow-md m-1 p-2 sm:bg-green-200 lg:bg-red-400">     
<div>
<img  className="w-20" src="https://i.pinimg.com/736x/8b/78/d4/8b78d4f191990af2dbedcf9c30480581.jpg"/>
</div>
<ul className="flex justify-between p-2 ">
    <li className="m-2">Online Status{onlineStatus?"✅":"🔴"}</li>
    <li className="m-2">Home</li>
          <li className="m-2">About</li>
    <li className="m-2">Cart</li>
    <li className="m-2">Profile</li>
</ul>

    </div>
)}
export default  Head;