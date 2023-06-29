import AppStore from "../../assets/AppStore.webp";
import PlayStore from "../../assets/PlayStore.webp";

import LogoLight from "../../assets/LogoLight.png";
import ToTop from "../ToTop";

const Footer = () => {
  return (
    <div className="px-[10%] py-20 flex flex-wrap justify-between items-center bg-primary">
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
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            About Us
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Team
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Career
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Smile Plus
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Smile Blog
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Smile Instamart
          </li>
        </ul>
        <ul>
          <li className="mb-4 font-bold text-lg font-secondary text-light">
            Contact
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Help and Support
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Partner with Smile
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Ride with Smile
          </li>
        </ul>
        <ul>
          <li className="mb-4 font-bold text-lg font-secondary text-light">
            Legal
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Terms and Conditions
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Refund Policy
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Offers
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Privacy Policy
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Cookie Policy
          </li>
        </ul>
      </div>
      <div className="py-4 flex gap-4">
        <img className="h-12 cursor-pointer" src={PlayStore} />
        <img className="h-12 cursor-pointer" src={AppStore} />
      </div>
      <ToTop />
    </div>
  );
};

export default Footer;
