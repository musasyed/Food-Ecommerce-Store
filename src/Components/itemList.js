import React from 'react'
import { CDN_URL } from './utils/constants'
import { useDispatch } from 'react-redux'
import { addItem } from './Redux/cartSlice';

const ItemList = ({items}) => {

  const dispatch=useDispatch();

  const handleAddItem=(item)=>{
    //Dispatch an Action on Add Button
    dispatch(addItem(item))
  }

  return (
    <div>
     {items.map((item)=>(
        <div key={item.card.info.id} className='p-2 m-2 border-black border-b-2 text-left flex gap-4'> 
            <div className='w-[80%]'>
            <div className='py-2'>
                <span> {item.card.info.name}</span>
                <span> - ₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
            </div>
           <p className='text-xs'>{item.card.info.description}</p>
           </div>
           <div className='w-[20%]'>    
              <button onClick={()=>handleAddItem(item)} className='bg-white shadow-lg p-2 absolute rounded-lg mx-36'>Add +</button>   
              <div>
                <img  src={CDN_URL + item.card.info.imageId} className='rounded-lg'/>
             </div>
            </div>
        </div>
     ))}
    </div>
  )
}

export default ItemList
