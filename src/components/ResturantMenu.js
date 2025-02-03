import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import resList from "../utils/mockdata"; // Import the mock data
import { IMAGE_URL } from "../utils/constants";

const RestaurantMenu = () => {
    const { resId } = useParams(); // Get restaurant ID from the URL

    // Find the matching restaurant
    const resInfo = resList.find((res) => res.info.id === resId);

    if (!resInfo) {
        return <Shimmer />; // Show loading if restaurant is not found
    }

    const { name, card } = resInfo.info;
    const itemCards = card?.itemCards || [];

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>Recommended Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id} className="resturant-menu">
                        <div className="resturantmenu-info">
                        <h3>{item.card.info.name}</h3>
                        <p>₹{(item.card.info.price / 100).toFixed(2)}</p>
                        <p>{item.card.info.description}</p>
                        </div>
                        <div className="resturantmenu-image">
                        <img 
                            src={`${IMAGE_URL}${item.card.info.imageId}`} 
                            alt={item.card.info.name} 
                            width="150"
                        />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
