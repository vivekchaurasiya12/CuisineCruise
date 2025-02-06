import { Link } from "react-router-dom";
import { IMAGE_URL } from "../utils/constants";

const ResturantCard = ({ resData }) => {
    return (
        <Link to={`/resturant/${resData.id}`} className="resturant-card-link">
         <div className="resturant-card p-4 bg-white rounded-xl shadow-lg w-80 min-h-100 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ">
  <img
    alt="restaurant-image"
    className="w-full h-48 object-cover rounded-t-xl"
    src={IMAGE_URL + resData.cloudinaryImageId}
  />
  <div className="p-4">
    <h3 className="text-xl font-semibold text-gray-800 font-serif">{resData.name}</h3>
    <h5 className="text-gray-600 text-sm font-serif">{resData.cuisines.join(", ")}</h5>

    <div className="flex justify-between items-center mt-2">
      <span className="text-yellow-500 font-semibold flex items-center">
        ⭐ {resData.avgRating}
      </span>
      <span className="text-gray-600 text-sm font-serif">{resData.sla.deliveryTime} Min</span>
    </div>

    <h5 className="text-lg font-medium text-gray-700 mt-2 font-serif">{resData.costForTwo}</h5>
  </div>
</div>


        </Link>
    );
};
export const withPromotedResturnat = (ResturantCard) =>{
  return (props) => {
    return(
      <div>
      <label className="absolute bg-gray-700 z-10 text-white rounded-md p-1 text-xs font-serif">Promoted</label>
      <ResturantCard {...props}/>
      </div>
    )
};
};

export default ResturantCard;
