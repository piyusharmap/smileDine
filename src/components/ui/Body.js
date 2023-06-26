import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RESTAURANTS_API_URL } from "../../config";
import RestaurantCard from "./RestaurantCard";
import { filterData } from "../../utils/utils";
import BodyShimmer from "../BodyShimmer";
import CartPopup from "../CartPopup";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  const cartItems = 0;

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
    <>
      <div className="w-screen h-40 relative flex justify-center items-center bg-light shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <h1 className="text-4xl text-dark font-primary font-bold">
          Grab 50% OFF & Free Delivery on your FIRST order.
        </h1>
      </div>

      <div className="px-[10%] py-4 pb-0 relative">
        <div className="w-1/2 mx-auto mt-4 mb-6 flex justify-between items-center border-[1px] border-solid border-light ">
          <input
            className="w-full py-2 px-4 text-base font-secondary focus:outline-none"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="py-2 px-4 text-dark hover:text-primary"
            onClick={(e) => searchRestaurants(allRestaurants, searchText)}
          >
            <FontAwesomeIcon className="m-auto text-lg" icon={faSearch} />
          </button>
        </div>
        <p className="h-fit w-full p-2 text-right text-3xl text-dark font-secondary font-extrabold border-b-solid border-b-[1px] border-primary">
          {filteredRestaurants.length + " restaurants"}
        </p>
        {errorMsg === "" ? null : (
          <h1 className="font-secondary font-bold p-2">{errorMsg}</h1>
        )}
        <div className="min-h-screen p-4 flex flex-wrap justify-around gap-4">
          {filteredRestaurants.length === 0 ? (
            <BodyShimmer />
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
        {cartItems > 0 ? <CartPopup /> : null}
      </div>
    </>
  );
};

export default Body;
