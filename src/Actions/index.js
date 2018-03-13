export function activePage(page) {
  return {
    type: 'ACTIVE_PAGE',
    payload: page,
  };
}

export function loadMenu() {
  return {
    type: 'LOAD_MENU',
    payload: null,
  };
}

export function addToOrder(item) {
  return {
    type: 'ADD_TO_ORDER',
    payload: item,
  };
}

export function removeFromOrder(item) {
  return {
    type: 'REMOVE_FROM_ORDER',
    payload: item,
  };
}
