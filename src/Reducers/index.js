import { combineReducers } from 'redux';
import Main from './reducer_main';
import Menu from './reducer_menu';
import Order from './reducer_order';

const rootReducer = combineReducers({
  main: Main,
  menu: Menu,
  order: Order,
});

export default rootReducer;
