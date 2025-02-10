import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    //A slice is a combination of reducers and actions in Redux Toolkit.
    //createSlice() combines state, reducers, and actions in one place
    name : "cart",
    initialState : {
        items : []
    },

    reducers : {
        // Reducer take diffrent typs of actions
        addItem : (state,action)=>{
        //modifying the state here
            state.items.push(action.payload);
        },
        removeItem : (state) =>{
            state.items.pop();
        },
        clearCart : (state) =>{
              state.items.length = 0;
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;//exporting the actions 
export default cartSlice.reducer;//exporting the reducers