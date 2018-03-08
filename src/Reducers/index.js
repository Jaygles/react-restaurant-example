import { combineReducers } from 'redux';
import Main from './reducer_main';
import Menu from './reducer_menu';

const rootReducer = combineReducers({
  main: Main,
  menu: Menu,
});

export default rootReducer;