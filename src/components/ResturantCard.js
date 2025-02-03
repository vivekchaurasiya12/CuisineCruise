import { Link } from "react-router-dom";
import { IMAGE_URL } from "../utils/constants";

const ResturantCard = ({ resData }) => {
    return (
        <Link to={`/resturant/${resData.id}`} className="resturant-card-link">
            <div className="resturant-card">
                <img 
                    alt="restaurant-image" 
                    className="restura-image" 
                    src={IMAGE_URL + resData.cloudinaryImageId} 
                />
                <h3>{resData.name}</h3>
                <h5>{resData.cuisines.join(", ")}</h5>
                <h6>{resData.avgRating} Stars</h6>
                <h5>{resData.sla.deliveryTime} Minutes</h5>
                <h5>{resData.costForTwo}</h5>
            </div>
        </Link>
    );
};

export default ResturantCard;
