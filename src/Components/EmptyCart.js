import { useNavigate } from "react-router-dom";

const EmptyCart = ()=>{
    const navigate = useNavigate()
    return(
       <div className="empty-cart">
        <img src="/images/Cart_empty.png"></img>
        <p>Your cart is empty</p>
        <span>You can go to home to view other Restaurants</span>
        <button onClick={()=>navigate("/")}>See restaurants near you</button>
       </div>
    )
}
export default EmptyCart;