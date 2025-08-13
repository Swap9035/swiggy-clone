import { useOutletContext, useParams } from "react-router-dom";
import "./../Style/restaurant.css";
import { useEffect, useState } from "react";
import RestaurantInfo from "../Components/RestaurantInfo";
import MenuItem from "../Components/MenuItem";
const Restaurant = () => {
  const { resId } = useParams();
  const { cartItems, addItem, removeItem, restaurants } = useOutletContext();
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const found = () => restaurants.find((i) => i.info.id === resId);
        setRestaurant(found);
        const response = await fetch(
          "https://swiggy-clone-pied-nu.vercel.app/menu.json"
        );
        const menuData = await response.json();
        setMenu(menuData || []);
        console.log(menu, restaurant);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [resId, restaurants]);
  return (
    <div className="restaurant">
      <div className="restaurant__breadcrumb">
        <span>Home/Nagpur/{restaurant?.info?.name}</span>
      </div>
      <div className="restaurant__container">
        <RestaurantInfo restaurant={restaurant}> </RestaurantInfo>

        <div className="restaurant__menu">
          {menu.map((res) => {
            const title = res?.card?.card.title;
            return <MenuItem res={res} addItem={addItem} removeItem={removeItem} cartItems={cartItems}></MenuItem>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
