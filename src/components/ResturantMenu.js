import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import resList from "../utils/mockdata"; // Import the mock data
import { IMAGE_URL } from "../utils/constants";
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

    const { name,areaName,avgRating,sla,groupCards, card } = resInfo.info;
    // groupCards.forEach((groupCards) => {
    //   console.log(groupCards.card); 
      // Log the title of each groupCard
    
      // Iterate over itemCards within each groupCard
      // groupCards.card.itemCards.forEach((itemCard) => {
      //   console.log(itemCard.card.info.name); // Log the name of each item
      // });
    // });

    const itemCards = card?.itemCards || [];

    return (
        <div className="menu p-6">
       <div className="p-4 maindiv bg-white rounded-xl shadow-md border border-gray-200" >
    <h1 className="text-3xl font-semibold text-gray-800 font-serif">{name}</h1>
    <h2 className="text-xl text-gray-600 flex items-center gap-2 font-serif"> <IoLocationOutline className="text-red-500" />  {areaName}</h2>
    <p className="text-lg text-gray-700 flex items-center gap-2 font-serif"><FaStar className="text-green-500" /> {avgRating}</p>
    <p className="text-lg text-gray-700 flex items-center gap-2 font-serif">
    <MdOutlineAccessTime className="text-black-500" /> {sla.deliveryTime} Min</p>
</div>

        <h2 className="text-2xl text-gray-600 mt-2 mb-4 text-center font-bold">Recommended Menu</h2>
        <ul className="space-y-6 ">
          {itemCards.map((item) => (
            <li
              key={item.card.info.id}
              className="resturant-menu flex items-center bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 "
            >
              <div className="resturantmenu-info flex-1 ">
                <h3 className="text-xl font-semibold text-gray-800">{item.card.info.name}</h3>
                <p className="text-lg text-green-600 font-semibold">
                  ₹{(item.card.info.price / 100).toFixed(2)}
                </p>
                <p className="text-sm text-gray-600 mt-2">{item.card.info.description}</p>
              </div>
              <div className="resturantmenu-image ml-6 flex-shrink-0">
                <img
                  src={`${IMAGE_URL}${item.card.info.imageId}`}
                  alt={item.card.info.name}
                  className="w-32 h-32 object-cover rounded-md"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      

    );
};

export default RestaurantMenu;
