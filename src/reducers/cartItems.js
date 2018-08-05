const initcartItems = [];

const cartItems = (state = initcartItems, action) => {
  let clone;
  switch(action.type){
    case "ADD_PRODUCTTOCART":
      clone = [...state];
      let product = state.find(item => item.productId == action.productId);
      if(product != null){
        product.productCount += 1;
      }
      else{
        clone.push({
          productId: action.productId,
          productCount: 1
        });
      }
      return clone;
    default:
      return state;
  }
}
export default cartItems;