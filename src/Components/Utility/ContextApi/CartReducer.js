
const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { ids, name, price,image } = action.payload;
    console.log(ids,name,price,image)
  }

  return state;
};

export default CartReducer;
