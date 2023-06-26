import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import useRestaurantOffer from "../../hooks/useRestaurantOffer";
import OfferCard from "./OfferCard";
import MenuItem from "./MenuItem";

const RestaurantMenu = () => {
  const { id } = useParams();
  const { restaurantInfo, menuInfo } = useRestaurantMenu(id);
  const offers = useRestaurantOffer(id);

  if (!restaurantInfo) return <h1>Shimmer</h1>;

  return (
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
          <p className="py-1 px-2 bg-accent font-bold font-secondary text-dark text-sm">
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
          {offers.length === 0 ? (
            <p className="p-2 mt-2 font-primary text-lg text-dark">
              No offers available at this moment.
            </p>
          ) : (
            offers.map((offer) => {
              return (
                <OfferCard key={offer?.info?.offerIds[0]} info={offer?.info} />
              );
            })
          )}
        </div>
      </div>
      <div className="p-4 w-full flex flex-col">
        <h1 className="pb-4 text-center text-2xl font-primary font-bold text-dark border-b-[1px] border-dark border-dashed">
          Menu
        </h1>
        {menuInfo.map((menuItem, index) => {
          const menuItemInfo = menuItem?.card?.info;
          return <MenuItem key={index} info={menuItemInfo} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
