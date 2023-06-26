import AppStore from "../../assets/AppStore.webp";
import PlayStore from "../../assets/PlayStore.webp";

import LogoLight from "../../assets/LogoLight.png";

const Footer = () => {
  return (
    <div className="mt-4 px-[10%] py-20 flex flex-wrap justify-between items-center bg-primary">
      <div className="w-1/2">
        <img className="h-24" src={LogoLight} />
        <h1 className="mb-4 font-primary text-2xl font-extrabold">
          Smile Dine
        </h1>
        <p className="text-6xl font-bold font-primary text-white">
          Savor Every Bite, Delivered with Delight!
        </p>
        <p className="mb-4 text-lg font-secondary text-light">
          Order food from your nearby favourite restaurants.
        </p>
      </div>
      <div className="w-1/2 flex justify-between gap-2">
        <ul>
          <li className="mb-4 font-bold text-lg font-secondary text-light">
            Company
          </li>
          <li className="mt-2 font-secondary text-base text-white">About Us</li>
          <li className="mt-2 font-secondary text-base text-white">Team</li>
          <li className="mt-2 font-secondary text-base text-white">Career</li>
          <li className="mt-2 font-secondary text-base text-white">
            Smile Plus
          </li>
          <li className="mt-2 font-secondary text-base text-white">
            Smile Blog
          </li>
          <li className="mt-2 font-secondary text-base text-white">
            Smile Instamart
          </li>
        </ul>
        <ul>
          <li className="mb-4 font-bold text-lg font-secondary text-light">
            Contact
          </li>
          <li className="mt-2 font-secondary text-base text-white">
            Help and Support
          </li>
          <li className="mt-2 font-secondary text-base text-white">
            Partner with Smile
          </li>
          <li className="mt-2 font-secondary text-base text-white">
            Ride with Smile
          </li>
        </ul>
        <ul>
          <li className="mb-4 font-bold text-lg font-secondary text-light">
            Legal
          </li>
          <li className="mt-2 font-secondary text-base text-white">
            Terms and Conditions
          </li>
          <li className="mt-2 font-secondary text-base text-white">
            Refund Policy
          </li>
          <li className="mt-2 font-secondary text-base text-white">Offers</li>
          <li className="mt-2 font-secondary text-base text-white">
            Privacy Policy
          </li>
          <li className="mt-2 font-secondary text-base text-white">
            Cookie Policy
          </li>
        </ul>
      </div>
      <div className="py-4 flex gap-4">
        <img className="h-12" src={PlayStore} />
        <img className="h-12" src={AppStore} />
      </div>
    </div>
  );
};

export default Footer;
