import { useState,useEffect, useContext } from "react"
import RestCard from "./RestrauntCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";






const Body=()=>{

    const {loggedInUser,setUserName}=useContext(UserContext)

    const [restrauntlist,setRestrauntList]=useState([]);
    const [filteredRestraunt,setFilteredRestraunt]=useState([])
    const[searchText,setSearchText]=useState("")


    // For Fetching the Data
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const data=await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        // console.log("json: ",json)

        // Optional Chaining
        setRestrauntList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }
    // Conditoning Rendering
        // if(restrauntlist.length===0){
        //     return <Shimmer />
        // }


        // console.log("restraunt list: ", restrauntlist)


      const onlineStatus=useOnlineStatus();

      if(onlineStatus===false){
        return <h1>Look like you are not connected to internet, Please check your internet ;-)</h1>
      }


    return restrauntlist.length===0?<Shimmer />:(
        <div className="body">
            <div className="filter-btn flex justify-center items-center">
                <div className="justify-center flex items-center">
                    <input className="border p-2 border-black" type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                      const filteredResult= restrauntlist.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestraunt(filteredResult)

                    console.log(filteredResult)
                    }}>Search</button>
                </div>
                <div>
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" type="button" onClick={()=>{
                    const filterResult=restrauntlist.filter((res)=>res.info.avgRating>4.5)
                    setFilteredRestraunt(filterResult);
                    console.log(filterResult);
                }}>Top Rated Restraunt</button>
                </div>
                <div>
                Enter Name: <input type="text"  className="border p-2 border-black" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
                </div>
            </div>
               
            <div className="res-container justify-center flex flex-wrap">
               {
                filteredRestraunt.map((info)=>{
                    return(
                   <Link key={info.info.id} to={"restraunts/"+info.info.id}> <RestCard   data={info.info} /></Link>
                )
                })
               }
                
                
            </div>
            
        </div>
    )
}

export default Body;