import { combineReducers } from 'redux'

import  camera  from './camera/cameraReducer';

const rootReducer = combineReducers({
  camera,
});

export default rootReducer;