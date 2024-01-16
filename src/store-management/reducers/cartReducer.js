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
      let tempCart = prepareCart(
        state.cartDetails,
        action.payload,
        action.type
      );
      state.cartDetails = tempCart;
    },
    updateToCart: (state, action) => {
      let tempCart = prepareCart(
        state.cartDetails,
        action.payload,
        action.type
      );
      state.cartDetails = tempCart;
    },

    removeFromCart: (state, action) => {
      let tempCart = prepareCart(
        state.cartDetails,
        action.payload,
        action.type
      );
      state.cartDetails = tempCart;
    },
  },
});

const prepareCart = (cartData, payloadData, type) => {
  let tempCart = JSON.parse(JSON.stringify(cartData));
  if (type == "cart/addToCart") {
    tempCart.lineItems.push(payloadData);
    tempCart.lastUpdateAt = new Date();
    tempCart.totalAmount = 0;
    tempCart.totalItems = 0;

    tempCart.lineItems.forEach((element) => {
      tempCart.totalAmount += element.quantity * element.price;
      //tempCart.totalItems+=1;
      tempCart.totalItems += element.quantity;
    });

    return tempCart;
  } else if (type == "cart/updateToCart") {
    let index = tempCart.lineItems.findIndex(
      (element) => element.id == payloadData.id
    );
    if(payloadData.quantity==0){
      tempCart.lineItems.splice(index, 1);

    }else{
      tempCart.lineItems[index].quantity = payloadData.quantity;

    }
    tempCart.totalAmount = 0;
    tempCart.totalItems = 0;
    tempCart.lineItems.forEach((element) => {
      tempCart.totalAmount += element.quantity * element.price;
      //  tempCart.totalItems += 1;
      tempCart.totalItems += element.quantity;
    });
    return tempCart;
  } else if (type == "cart/removeFromCart") {
    let index = payloadData;
    tempCart.lineItems.splice(index, 1);
    tempCart.totalAmount = 0;
    tempCart.totalItems = 0;
    tempCart.lineItems.forEach((element) => {
      tempCart.totalAmount += element.quantity * element.price;
      // tempCart.totalItems += 1;
      tempCart.totalItems += element.quantity;
    });
    return tempCart;
  } else {
    return {
      cartId: "",
      lastUpdateAt: "",
      lineItems: [],
      totalItems: 0,
      totalAmount: 0,
      shippingAddress: {},
      billingAddress: {},
      paymentType: "Cash on delivery",
    };
  }
};

export const { addToCart, updateToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
