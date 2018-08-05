const initcartItems = [];

const cartItems = (state = initcartItems, action) => {
  let clone, product;
  switch(action.type){
    case "ADD_PRODUCTTOCART":
      clone = [...state];
      product = state.find(item => item.productId === action.productId);
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
    case "CLEAR_CARTITEMS":
      return [];
    case "UPDATE_CARTITEM":
      if(action.count <= 0){
        return state.filter(item => item.productId !== action.id);
      }
      clone = [...state];
      product = state.find(item => item.productId === action.id);
      product.productCount = action.count;
      return clone;
    case "REMOVE_CARTITEM":
      return state.filter(item => item.productId !== action.id);
    default:
      return state;
  }
}
export default cartItems;