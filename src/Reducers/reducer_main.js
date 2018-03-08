export default function(state = null, action) {

  switch(action.type) {
    case 'ACTIVE_PAGE':
      return action.payload;
    default:
      return state;
  }
}