import React, { useEffect, useState } from 'react'

const useOnlineStatus = () => {
  
    let [onlineStatus,setOnlineStatus]=useState(navigator.onLine)

    useEffect(()=>{

        let handleOnline=()=>setOnlineStatus(true)
        let handleOffline=()=>setOnlineStatus(false)
  
  window.addEventListener("online",handleOnline)
  window.addEventListener("offline",handleOffline)

return ()=>{
    window.removeEventListener("online",handleOnline)
    window.removeEventListener("offline",handleOffline)
}

    },[])

  return onlineStatus
}

export default useOnlineStatus