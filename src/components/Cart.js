import { useDispatch, useSelector } from "react-redux";
import { IMAGE_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // Here we want to display the cart items so we need to read the store for this we use selector
  const cartItems = useSelector((store) => store.cart.items);//this is accessing the specific portion of sotre

  // const store = useSelector((store)=>store); 1. this is accessing the whole store which decrease the efficiency
  // cosnt cartItems = store.Cart.itmes;        2. becaz suppoze there is update in login info then here we dont required but this here we uses whole store which is not required we need only cart info.
 // console.log(cartItems);
 
  const dispatch = useDispatch();
  const handleClearCart = ()=>{
    dispatch(clearCart());
  }
  //useSelector() → Gets state from the Redux store.
  //useDispatch() → Sends actions to update the store.

  return (
    <div className="p-6">
      <h1 className="text-center py-2 text-2xl font-bold">Cart</h1>
      <button className=" absolute bottom-2 right-8  text-white px-3 py-1 rounded-md text-sm font-serif bg-gradient-to-r from-green-500 to-green-600 hover:bg-green-950 transition-colors duration-300" onClick={handleClearCart}>Clear</button>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-500">Your cart is empty</p>
      ) : (
        <ul className="space-y-6 mt-4">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="resturant-menu flex items-center bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4"
            >
              <div className="resturantmenu-info flex-1">
                <h3 className="text-xl font-semibold text-gray-800">{item.card.info.name}</h3>
                <p className="text-lg text-green-600 font-semibold">
                  ₹{(item.card.info.price / 100).toFixed(2)}
                </p>
                <p className="text-sm text-gray-600 mt-2">{item.card.info.description}</p>
              </div>
              <div className="ml-6 flex-shrink-0 relative">
                <img
                  src={`${IMAGE_URL}${item.card.info.imageId}`}
                  alt={item.card.info.name}
                  className="w-32 h-32 object-cover rounded-md"
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;