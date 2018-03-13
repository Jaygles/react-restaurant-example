export default function (state = [], action) {
  switch (action.type) {
  case 'ADD_TO_ORDER':
    return state;
  case 'REMOVE_FROM_ORDER':
    return state;
  default:
    return state;
  }
}
