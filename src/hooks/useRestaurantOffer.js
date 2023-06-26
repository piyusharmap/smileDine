import { useEffect, useState } from "react";
import { RESTAURANTS_MENU_API_URL } from "../config";

const useRestaurantOffer = (resId) => {
  const [restaurantOffers, setRestaurantOffers] = useState([]);

  useEffect(() => {
    getOffers();
  }, []);

  const getOffers = async () => {
    try {
      const data = await fetch(RESTAURANTS_MENU_API_URL + resId);
      const json = await data.json();

      setRestaurantOffers(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
      );
    } catch (err) {
      console.log(err);
      setRestaurantOffers([]);
    }
  };
  return restaurantOffers;
};

export default useRestaurantOffer;
