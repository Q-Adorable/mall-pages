const initProductItems = [];

const productItems = (state = initProductItems, action) => {
  switch(action.type){
    case 'INIT_PRODUCT':
            return action.data;
  }
  return state;
}
export default productItems;