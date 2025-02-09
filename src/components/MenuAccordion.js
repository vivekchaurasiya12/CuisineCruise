import Accordion from "./Accordion"; // Import the Accordion component
import { IMAGE_URL } from "../utils/constants";

const MenuAccordion = ({ groupCard }) => {
 // console.log(groupCard);
  return (
    <Accordion title={groupCard.card.title} count={groupCard.card.itemCards.length}>
      <ul className="space-y-6">
        {groupCard.card.itemCards.map((item) => (
          <li
            key={item.card.info.id}
            className="resturant-menu flex items-center bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4"
          >
            <div className="resturantmenu-info flex-1">
              <h3 className="text-xl font-semibold text-gray-800">{item.card.info.name}</h3>
              <p className="text-lg text-green-600 font-semibold">
                ₹{(item.card.info.price / 100).toFixed(2)}
              </p>
              <p className="text-sm text-gray-600 mt-2">{item.card.info.description}</p>
            </div>
            <div className=" ml-6 flex-shrink-0 relative">
              <img
                src={`${IMAGE_URL}${item.card.info.imageId}`}
                alt={item.card.info.name}
                className="w-32 h-32 object-cover rounded-md"
              />
              <button className=" absolute bottom-2 right-8  text-white px-3 py-1 rounded-md text-sm font-serif bg-gradient-to-r from-green-500 to-green-600 hover:bg-green-950 transition-colors duration-300">Add +</button>
            </div>
          </li>
        ))}
      </ul>
    </Accordion>
  );
};

export default MenuAccordion;