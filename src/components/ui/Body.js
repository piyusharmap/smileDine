import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RESTAURANTS_API_URL } from "../../config";
import RestaurantCard from "./RestaurantCard";
import { filterData } from "../../utils/utils";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const data = await fetch(RESTAURANTS_API_URL);
      const json = await data.json();

      setAllRestaurants(json?.data?.cards[0]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[0]?.data?.data?.cards);
    } catch (err) {
      console.log(err);
      setAllRestaurants([]);
      setFilteredRestaurants([]);
    }
  };

  const searchRestaurants = (restaurants, target) => {
    if (target != "") {
      const data = filterData(restaurants, target);
      setFilteredRestaurants(data);
      setErrorMsg("");

      if (data.length === 0) {
        setErrorMsg("No matching restaurant");
      }
    } else {
      setFilteredRestaurants(restaurants);
      setErrorMsg("");
    }
  };

  if (!allRestaurants) return null;
  return (
    <div className="px-[10%] py-4">
      <div className="w-1/2 mx-auto mt-4 mb-6 py-2 px-4 flex justify-between items-center border-[1px] border-darkShade">
        <input
          className="w-full text-base font-secondary focus:outline-none"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="hover:text-light"
          onClick={(e) => searchRestaurants(allRestaurants, searchText)}
        >
          <FontAwesomeIcon className="ml-2" icon={faSearch} />
        </button>
      </div>
      <p className="h-fit w-full p-2 text-2xl font-primary font-bold border-b-solid border-b-[1px] border-b-darkShade">
        {filteredRestaurants.length + " restaurants"}
      </p>
      {errorMsg === "" ? null : (
        <h1 className="font-secondary font-bold p-2">{errorMsg}</h1>
      )}
      <div className="min-h-screen p-4 flex flex-wrap justify-around gap-4">
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
    </div>
  );
};

export default Body;
