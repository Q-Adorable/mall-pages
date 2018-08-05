const initOrders = [];

const orders = (state = initOrders, action) => {
  switch(action.type){
    case 'INIT_ORDER':
            return action.data;
    default:
      return state;
  }
}
export default orders;