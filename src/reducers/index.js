import { combineReducers } from 'redux';
import login from './login';
import ui from './ui';
import modal from './modal';
import study from './study';
import subject from './subject';
import weather from './weather';

const appReducers = combineReducers({
  login,
  ui,
  modal,
  study,
  subject,
  weather
});
export default appReducers;
