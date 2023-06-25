import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANTS_MENU_API_URL } from "../../config";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState();

  useEffect(() => {
    getRestaurantInfo();
  });

  const getRestaurantInfo = async () => {
    try {
      const data = await fetch(RESTAURANTS_MENU_API_URL + id);
      const json = await data.json();

      console.log(json?.data?.cards[0]?.card?.card?.info);
    } catch (err) {
      console.log(err);
    }
  };

  return <div></div>;
};

export default RestaurantMenu;
