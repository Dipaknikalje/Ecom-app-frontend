import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  userId: localStorage.getItem("userId")
    ? localStorage.getItem("userId")
    : null,
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
      localStorage.setItem("userId", action.payload);
    },
    add(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => {
        console.log(item.ids);

        return item.ids === action.payload.ids;
      });
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(
          `Increased ${state.cartItems[itemIndex].name} cart quantity!`,
          { position: toast.POSITION.TOP_RIGHT }
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} added to cart`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // state.push(action.payload)
    },
    decreaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.ids === action.payload.ids
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info("product quantity decreased", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.ids !== action.payload.ids
        );

        state.cartItems = nextCartItems;
        toast.error("Product removed from cart", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state, action) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: toast.POSITION.TOP_RIGHT });
    },
    getTotal: (state, action) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total);
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },

    removeFromCart: (state, action) => {
      // console.log(state.cartItems);
      state.cartItems.map((cartItem) => {
        if (cartItem.ids === action.payload.ids) {
          const filteredItems = state.cartItems.filter(
            (item) => item.ids !== cartItem.ids
          );
          state.cartItems = filteredItems;

          toast.error("Product removed from cart", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    userLoggedOut: (state, action) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Logged out Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    orderPlaced: (state, action) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.success("Order placed Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  },
});
export const {
  setUserId,
  add,
  decreaseCart,
  clearCart,
  getTotal,
  removeFromCart,
  userLoggedOut,
  orderPlaced,
} = cartSlice.actions;
export default cartSlice.reducer;
