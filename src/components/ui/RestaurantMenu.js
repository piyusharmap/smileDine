import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faMapPin,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import useRestaurantOffer from "../../hooks/useRestaurantOffer";
import OfferCard from "./OfferCard";
import MenuItem from "./MenuItem";
import MenuShimmer from "../MenuShimmer";
import CartPopup from "../CartPopup";
import { useSelector } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
  const { restaurantInfo, menuInfo } = useRestaurantMenu(id);
  const offers = useRestaurantOffer(id);
  const cartItems = useSelector((store) => store.cart.cartItems);

  return !restaurantInfo && !menuInfo ? (
    <MenuShimmer />
  ) : (
    <>
      <div className="px-[10%] py-4 mt-4 flex justify-between items-start gap-8">
        <div className="w-2/5">
          <h1 className="pt-2 font-bold font-primary text-2xl">
            {restaurantInfo?.name}
          </h1>
          <p className="pt-2 font-secondary font-bold text-dark">
            <FontAwesomeIcon className="mr-2" icon={faMapPin} />
            {restaurantInfo?.city + ", " + restaurantInfo.areaName}
          </p>
          <p className="pt-2 text-sm font-secondary text-dark">
            {restaurantInfo?.cuisines.join(", ")}
          </p>
          <div className="p-2 mt-2 flex justify-between items-center">
            <p className="p-2 font-bold font-secondary text-dark text-sm">
              {restaurantInfo?.costForTwoMessage}
            </p>
            <p className="p-2 font-bold font-secondary text-dark text-sm">|</p>
            <p className="py-1 px-2 flex justify-center items-center bg-accent font-bold font-secondary text-dark text-sm">
              <FontAwesomeIcon className="mr-2" icon={faStar} />
              {restaurantInfo?.avgRating ? restaurantInfo?.avgRating : "--"}
            </p>
            <p className="p-2 font-bold font-secondary text-dark text-sm">|</p>
            <p className="p-2 font-bold font-secondary text-dark text-sm">
              {restaurantInfo?.isOpen ? "OPEN" : "CLOSED"}
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-around items-center border-t-[1px] border-primary">
            <h1 className="mt-2 text-lg font-bold font-primary">Offers</h1>
            {!offers ? (
              <p className="p-2 mt-2 font-primary text-lg text-dark">
                No offers available at this moment.
              </p>
            ) : (
              offers.map((offer) => {
                return (
                  <OfferCard
                    key={offer?.info?.offerIds[0]}
                    info={offer?.info}
                  />
                );
              })
            )}
          </div>
        </div>

        <div className="p-4 w-full flex flex-col border-[1px] border-dark rounded-lg">
          <h1 className="my-2 py-8 text-center text-2xl font-primary font-bold text-dark border-b-[1px] border-dark border-dashed">
            <FontAwesomeIcon className="mr-2" icon={faUtensils} />
            Menu
          </h1>
          <p className="p-2 font-primary font-bold text-center">
            Total items: {menuInfo ? menuInfo.length : 0}
          </p>
          {menuInfo ? (
            menuInfo.map((menuItem, index) => {
              const menuItemInfo = menuItem?.card?.info;
              return (
                <MenuItem
                  key={index}
                  info={menuItemInfo}
                  restaurantName={restaurantInfo?.name}
                  resId={id}
                />
              );
            })
          ) : (
            <p className="p-2 mt-2 font-primary text-lg text-dark">
              Menu not available at this moment
            </p>
          )}
        </div>
      </div>
      {cartItems.length > 0 ? <CartPopup /> : null}
    </>
  );
};

export default RestaurantMenu;
