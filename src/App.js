// src/App.js
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Common/Header";
import { useEffect, useState } from "react";

function App() {
   
  const [restaurants,setRestaurants] = useState([]);
    const [cartItems,setCartItems] = useState([]);
      const [loading,setLoading] = useState(true);

      useEffect(() => {
        const fetchrestaurants = async () =>{
          try{
            const response = await fetch("https://swiggy-clone-pied-nu.vercel.app/Restaurant.json");
           if(response.ok){
            const data = await response.json();
            setRestaurants(data);
           }
          }
          catch(err) {}
            
          };
          fetchrestaurants();
        },[]);
     // Adding item to a cart
      const addItem =(item)=>{
        const existingIndex=cartItems.findIndex(
          (cartItems)=> cartItems.id == item.id
        );
        if(existingIndex != -1){
          const updateCart =[...cartItems];
          updateCart[existingIndex].quantity +=1;
          setCartItems(updateCart);
        }else{
          setCartItems([...cartItems,{...item,quantity:1}])
        }
      }
      // Remove item

      const removeItem=(item)=>{
        const existingIndex=cartItems.findIndex(
          (cartItems)=> cartItems.id == item.id
        );
        if(existingIndex != -1){
          const updateCart =[...cartItems];
          if(updateCart[existingIndex].quantity>1){
          updateCart[existingIndex].quantity -=1;
          }else{
            updateCart.splice(existingIndex,1);
          }
          setCartItems(updateCart);
        }
      
        };
        // Clear cart
        const clearCart =()=>{
          setCartItems([]);
        }

    //  useEffect(()=>console.log(restaurants),[restaurants])
     return (
    <div className="App">
      {/* Shared layout or header can go here */}
      <Outlet context={
        { restaurants,
          addItem,
          setCartItems,
          cartItems,
          removeItem,
          clearCart,
          setRestaurants,
        }
      
      }></Outlet>
      <Header cartItems={cartItems}></Header>
    </div>
  );  
}

export default App;
