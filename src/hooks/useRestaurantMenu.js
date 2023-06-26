import { useEffect, useState } from "react";
import { RESTAURANTS_MENU_API_URL } from "../config";

const useResaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState();
  const [menuInfo, setMenuInfo] = useState();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    try {
      const data = await fetch(RESTAURANTS_MENU_API_URL + resId);
      const json = await data.json();

      setRestaurantInfo(json?.data?.cards[0]?.card?.card?.info);
      setMenuInfo(
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards
      );
    } catch (err) {
      console.log(err);
    }
  };

  return {
    restaurantInfo,
    menuInfo,
  };
};

export default useResaurantMenu;
