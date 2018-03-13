export default function (state = null, action) {
  const menu = {
    appetiser: [
      { name: 'App One', price: 599 },
      { name: 'App Two', price: 499 },
      { name: 'App Three', price: 699 },
      { name: 'App Four', price: 699 },
    ],
    main: [
      { name: 'Main One', price: 1599 },
      { name: 'Main Two', price: 999 },
      { name: 'Main Three', price: 899 },
      { name: 'Main Four', price: 1099 },
    ],
    desert: [
      { name: 'Desert One', price: 499 },
      { name: 'Desert Two', price: 599 },
      { name: 'Desert Three', price: 599 },
      { name: 'Desert Four', price: 899 },
    ],
    drink: [
      { name: 'Drink One', price: 399 },
      { name: 'Drink Two', price: 299 },
      { name: 'Drink Three', price: 199 },
      { name: 'Drink Four', price: 499 },
    ],
  };

  switch (action.type) {
  case 'LOAD_MENU': {
    action.payload = menu;
    return action.payload;
  }
  default:
    return state;
  }
}
