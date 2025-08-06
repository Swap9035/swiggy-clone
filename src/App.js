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
     useEffect(()=>console.log(restaurants),[restaurants])
    return (
    <div className="App">
      {/* Shared layout or header can go here */}
      <Outlet context={
        { restaurants}
      
      }></Outlet>
      <Header></Header>
    </div>
  );  
}

export default App;
