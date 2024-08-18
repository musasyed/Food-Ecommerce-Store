import { useDispatch, useSelector } from "react-redux"
import ItemList from "../Components/itemList"
import { clearCart } from "../Components/Redux/cartSlice";



const Cart=()=>{

const dispatch=useDispatch();

const cartItem=useSelector((store)=>store.cart.items)

const handleClearCart=()=>{
    dispatch(clearCart());
}

console.log(cartItem)

return (
    <div className="text-center m-4 p-4">
        <h1 className="text-lg font-bold">Cart Page</h1>
        <div className="w-6/12 m-auto">
           {cartItem.length===0 && <h1 className="m-2">Cart is Empty, Do Shopping!</h1>}
           {cartItem.map((item)=>{
                return(<div key={item.card.info.id}> 
                <h1>{item.card.info.name}</h1>
                </div>)
           })}
           {cartItem.length===0?null:<div className="text-right">
           <button className="bg-black text-white text-lg p-2 rounded-md text-right" onClick={handleClearCart} >Clear Cart</button> 
           </div>}

        </div>
    </div>
)
}

export default Cart