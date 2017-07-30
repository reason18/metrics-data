import { combineReducers } from 'redux';

import mocodingUsersReducer from './mocodingUsers';
import mocodingFailedRequestsReducer from './mocodingFailedRequest';
import usevmUsersReducer from './usevmUsers';
import usevmFailedRequestsReducer from './usevmFailedRequest';

import mocodingDataReducer from './mocodingData';
import usevmDataReducer from './usevmData';

export default combineReducers ({
  mocodingUsers: mocodingUsersReducer,
  mocodingFailedRequests: mocodingFailedRequestsReducer,
  usevmUsers: usevmUsersReducer,
  usevmFailedRequests: usevmFailedRequestsReducer,
  mocodingData: mocodingDataReducer,
  usevmData: usevmDataReducer,
})
