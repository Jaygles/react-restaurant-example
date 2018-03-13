export default function (state = null, action) {
  const menu = {
    appetiser: [
      { name: 'App One', price: 5.99 },
      { name: 'App Two', price: 4.99 },
      { name: 'App Three', price: 6.99 },
      { name: 'App Four', price: 6.99 },
    ],
    main: [
      { name: 'Main One', price: 15.99 },
      { name: 'Main Two', price: 9.99 },
      { name: 'Main Three', price: 8.99 },
      { name: 'Main Four', price: 10.99 },
    ],
    desert: [
      { name: 'Desert One', price: 4.99 },
      { name: 'Desert Two', price: 5.99 },
      { name: 'Desert Three', price: 5.99 },
      { name: 'Desert Four', price: 8.99 },
    ],
    drink: [
      { name: 'Drink One', price: 3.99 },
      { name: 'Drink Two', price: 2.99 },
      { name: 'Drink Three', price: 1.99 },
      { name: 'Drink Four', price: 4.99 },
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
