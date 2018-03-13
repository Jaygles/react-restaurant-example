export default function (state = [], action) {
  function hasItem(order, payload) {
    let check = false;
    order.forEach((item) => {
      if (item.name === payload.name) {
        check = true;
      }
    });
    return check;
  }
  switch (action.type) {
  case 'ADD_TO_ORDER':
    if (hasItem(state, action.payload)) {
      state.forEach((item) => {
        if (item.name === action.payload.name) {
          item.count += 1;
        }
      });
      return [...state];
    }
    const orderItem = action.payload;
    orderItem.count = 1;
    return [...state, orderItem];

  case 'REMOVE_FROM_ORDER':
    if (hasItem(state, action.payload)) {
      state.forEach((item) => {
        if (item.name === action.payload.name) {
          item.count -= 1;
          state = state.filter(obj => obj.count !== 0);
        }
      });
    }
    return state;
  default:
    return state;
  }
}
