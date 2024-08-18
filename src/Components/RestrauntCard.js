import { useContext } from "react";
import { CDN_URL } from "./utils/constants";


const RestCard=(props)=>{

    const{data}=props;
    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
    }=data;
    console.log(data)

        return(
            <div className="res-card m-2 p-14 w-[400px] rounded-lg bg-gray-100 hover:bg-gray-200">
                <div className="img-container">
                <img className="res-img rounded-xl" src={CDN_URL + cloudinaryImageId} />
                </div>
                <h3 className="font-bold py-4 text-xl">{name}</h3>
                <h3>Rating:{avgRating}</h3>
                <h3>{cuisines[0]}</h3>
                <h3>{costForTwo}</h3>
                <h3>{sla.slaString}</h3>

               
            </div>
        )
    }

    

    export default RestCard;