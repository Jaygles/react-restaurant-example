export function activePage(activePage) {
  return {
   type: 'ACTIVE_PAGE',
   payload: activePage,
  }
}

export function loadMenu() {
  return {
    type: 'LOAD_MENU',
    payload: null,
  }
}