import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

const OfferCard = (props) => {
  const { info } = props;

  return (
    <div className="mt-1 w-full h-20 py-2 px-4 rounded-lg border-[1px] border-dashed border-dark hover:bg-light cursor-pointer">
      <h1 className="font-primary text-sm text-dark">
        <FontAwesomeIcon className="mr-2" icon={faTag} />
        {info.header}
      </h1>

      <div className="mt-2 flex">
        <p className="w-fit p-1 mx-auto font-primary font-bold text-sm text-dark">
          {info.couponCode}
        </p>
        <p className="w-fit p-1 mx-auto font-primary font-bold text-sm text-dark">
          |
        </p>
        <p className="w-fit p-1 mx-auto font-primary font-bold text-sm text-dark">
          {info.description}
        </p>
      </div>
    </div>
  );
};

export default OfferCard;
