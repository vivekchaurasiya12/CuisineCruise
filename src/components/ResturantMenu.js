// filepath: /c:/Users/vivek.chaurasiya/Downloads/ReactProject/ReactProject/src/components/ResturantMenu.js
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import resList from "../utils/mockdata"; // Import the mock data
import { IMAGE_URL } from "../utils/constants";
import MenuAccordion from "./MenuAccordion";
import { FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";

const RestaurantMenu = () => {
  const { resId } = useParams(); // Get restaurant ID from the URL

  // Find the matching restaurant
  const resInfo = resList.find((res) => res.info.id === resId);

  if (!resInfo) {
    return <Shimmer />; // Show loading if restaurant is not found
  }

  const { name, areaName, avgRating, sla, groupCards } = resInfo.info;

  return (
    <div className="menu p-6">
      <div className="p-4 maindiv bg-white rounded-xl shadow-md border border-gray-200">
        <h1 className="text-3xl font-semibold text-gray-800 font-serif">{name}</h1>
        <h2 className="text-xl text-gray-600 flex items-center gap-2 font-serif">
          <IoLocationOutline className="text-red-500" /> {areaName}
        </h2>
        <p className="text-lg text-gray-700 flex items-center gap-2 font-serif">
          <FaStar className="text-green-500" /> {avgRating}
        </p>
        <p className="text-lg text-gray-700 flex items-center gap-2 font-serif">
          <MdOutlineAccessTime className="text-black-500" /> {sla.deliveryTime} Min
        </p>
      </div>

      {groupCards.map((groupCard,index) => (
  <MenuAccordion key={index} groupCard={groupCard} />
))}
    </div>
  );
};
export default RestaurantMenu;