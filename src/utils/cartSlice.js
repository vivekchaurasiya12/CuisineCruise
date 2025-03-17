import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
const cartSlice = createSlice({
    //A slice is a combination of reducers and actions in Redux Toolkit.
    //createSlice() combines state, reducers, and actions in one place
    name : "cart",
    initialState : {
        items : [],
        restaurantId: null, // Track the restaurant ID
    },

    reducers: {
      addItem: (state, action) => {
        const itemRestaurantId = action.payload.restaurantId;
        const existingItem = state.items.find(
          (item) => item.card.info.id === action.payload.card.info.id
        );
  
        // If cart is empty, set the restaurantId and add the item
        if (state.items.length === 0) {
          state.restaurantId = itemRestaurantId;
          state.items.push({ ...action.payload, quantity: 1 });
        }
        // If item is from the same restaurant, allow addition
        else if (state.restaurantId === itemRestaurantId) {
          if (existingItem) {
            existingItem.quantity += 1;
          } else {
            state.items.push({ ...action.payload, quantity: 1 });
          }
        }
        // If from a different restaurant, show an error
        else {
          toast.error("Clear cart first before adding items from a different restaurant.");
        }
      },
  
      // Decrease the quantity or remove item if quantity is 1
      decreaseItem: (state, action) => {
        const existingItem = state.items.find(
          (item) => item.card.info.id === action.payload
        );
        if (existingItem) {
          if (existingItem.quantity > 1) {
            existingItem.quantity -= 1;
          } else {
            state.items = state.items.filter(
              (item) => item.card.info.id !== action.payload
            );
            if (state.items.length === 0) {
              state.restaurantId = null;
            }
          }
        }
      },
  
      clearCart: (state) => {
        state.items.length = 0;
        state.restaurantId = null; // Reset restaurant ID
      }
    }
  
})

export const {addItem,decreaseItem,clearCart} = cartSlice.actions;//exporting the actions 
export default cartSlice.reducer;//exporting the reducers