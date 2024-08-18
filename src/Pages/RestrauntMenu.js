import Shimmer from "../Components/Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../Components/utils/useRestrauntMenu";
import RestrauntCategory from "../Components/RestrauntCategory";
import { useState } from "react";


const RestrauntMenu = () => {

    const {resid}=useParams();
    const resMenu=useRestrauntMenu(resid);
    console.log(resid)


    const [showIndex,setShowIndex]=useState(null);


    /* we Make Seperate Hook for displaying the data with name of useRestrauntMenu
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu=async()=>{
        const data=await fetch(`${MENU_API}${resid}&catalog_qa=undefined&submitAction=ENTER`);
        const json= await data.json();
        setResMenu(json.data)
        console.log("Menu: ", json)
    // }
    */

    if (resMenu===null) return <Shimmer />

    const {name,cuisines,costForTwoMessage}=resMenu?.cards[2]?.card?.card?.info;
    const{itemCards}=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // console.log(itemCards,"resMenu",resMenu )

    const categories=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
console.log(categories)

    return(
    <div className="text-center my-10">
        <h1 className="font-bold text-2xl">{name}</h1>
        <div className="flex justify-center items-center my-3 gap-2">
        <h3 className="font-bold text-lg">{cuisines.join(" , ")}</h3>
        <h3 className="font-bold text-lg">- {costForTwoMessage}</h3>
        </div>
           { /*  Accordian Category  */ }
           {categories.map((category,index)=>
           <RestrauntCategory key={category?.card?.card?.title} 
            data={category?.card?.card} 
            showItems={index===showIndex? true : false }
            setShowIndex={()=>setShowIndex(index)}
            showIndex={showIndex}
            />
            
            
        )}
           
    </div>
  )
}

export default RestrauntMenu;