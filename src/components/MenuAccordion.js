import Accordion from "./Accordion"; // Import the Accordion component
import { IMAGE_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const MenuAccordion = ({ groupCard }) => {
 // console.log(groupCard);
    const dispatch  = useDispatch();//provided by react-redux
    const handleAddItem = (item)=>{
      //when i click on add item so i need to dispatch an action so we need dispatch so we use hooks usedispatch hooks
   dispatch(addItem(item));
    }
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
             <button
  className="absolute bottom-2 right-8 text-white px-3 py-1 rounded-md text-sm font-serif bg-gradient-to-r from-green-500 to-green-600 
             active:from-red-400 active:to-red-700
             transition-all duration-300 "onClick={() => handleAddItem(item)}>Add +</button>
            </div>
          </li>
        ))}
      </ul>
    </Accordion>
  );
};

export default MenuAccordion;