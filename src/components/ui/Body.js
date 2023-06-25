import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RESTAURANTS_API_URL } from "../../config";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const data = await fetch(RESTAURANTS_API_URL);
      const json = await data.json();

      // console.log(json?.data?.cards[0]?.data?.data?.cards);
      setAllRestaurants(json?.data?.cards[0]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[0]?.data?.data?.cards);
    } catch (err) {
      console.log(err);
      setAllRestaurants([]);
      setFilteredRestaurants([]);
    }
  };

  if (!allRestaurants) return null;
  return (
    <div>
      {filteredRestaurants.length === 0 ? (
        <h1>shimmer</h1>
      ) : (
        filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.data?.id}
              key={restaurant?.data.uuid}
            >
              <RestaurantCard restaurant={restaurant?.data} />
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Body;
