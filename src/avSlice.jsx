```javascript
import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
        {
        img: "",
        name: "Projektory",
        cost: 200,
        quantity: 0,
    },
    {
        img: "",
        name: "Głośnik",
        cost: 35,
        quantity: 0,
    },
    {
        img: "",
        name: "Mikrofony",
        cost: 45,
        quantity: 0,
    },
    {
        img: "",
        name: "Tablice białe",
        cost: 80,
        quantity: 0,
    },

    {
        img: "",
        name: "Oznakowanie",
        cost: 80,
        quantity: 0,
    },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
