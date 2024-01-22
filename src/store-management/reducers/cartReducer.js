import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartDetails: {
    cartId: "",
    lastUpdateAt: "",
    lineItems: [],
    totalItems: 0,
    totalAmount: 0,
    shippingAddress: {},
    billingAddress: {},
    paymentType: "Cash on delivery",
  },
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartDetails.lineItems.push(action.payload);
      updateTotalValues(state.cartDetails);
    },
    updateToCart: (state, action) => {
      let index = state.cartDetails.lineItems.findIndex(
        (element) => element.id === action.payload.id
      );

      if (action.payload.quantity === 0) {
        state.cartDetails.lineItems.splice(index, 1);
      } else {
        state.cartDetails.lineItems[index].quantity = action.payload.quantity;
      }

      updateTotalValues(state.cartDetails);
    },
    removeFromCart: (state, action) => {
      state.cartDetails.lineItems.splice(action.payload, 1);
      updateTotalValues(state.cartDetails);
    },
  },
});

const updateTotalValues = (cartData) => {
  cartData.totalAmount = 0;
  cartData.totalItems = 0;

  cartData.lineItems.forEach((element) => {
    cartData.totalAmount += element.quantity * element.price;
    cartData.totalItems += element.quantity;
  });
};


export const { addToCart, updateToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
