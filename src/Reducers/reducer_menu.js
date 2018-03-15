export default function (state = null, action) {
  const menu = {
    appetiser: [
      { name: 'Carrot Rillettes', price: 599 },
      { name: 'Hummus Cake', price: 499 },
      { name: 'Sweetmeat Brie with Carrot Sauce', price: 699 },
      { name: 'Artichoke Dip', price: 699 },
    ],
    main: [
      { name: 'Pub Style Carrot Burgers', price: 1599 },
      { name: 'Allspice Pork Chops with a Cream Cheese Frosting', price: 999 },
      { name: 'Bourbon Pecan Chicken', price: 899 },
      { name: 'Carrot Glazed Mahi Mahi', price: 1099 },
    ],
    desert: [
      { name: 'Citrus Carrot Cheesecake', price: 499 },
      { name: 'Carrot Cake', price: 599 },
      { name: 'Carrot Tiramisu', price: 599 },
      { name: 'Cake of Carrot', price: 899 },
    ],
    drink: [
      { name: 'Carrot Juice', price: 399 },
      { name: 'Carrot Soda', price: 299 },
      { name: 'Carrot Tea', price: 199 },
      { name: 'Hot Carrot', price: 499 },
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
