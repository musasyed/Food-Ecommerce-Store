import React, { useEffect, useState } from 'react'
import { MENU_API } from './constants'

const useRestrauntMenu = (resid) => {
 const [resMenu,setResMenu]=useState(null);

 useEffect(()=>{
    fetchData();
},[])

const fetchData=async()=>{
    const data=await fetch(MENU_API + resid+"&submitAction=ENTER")
    const json=await data.json();
    setResMenu(json.data);

}
// console.log(resMenu, "resmenu")
    return resMenu;
}

export default useRestrauntMenu;