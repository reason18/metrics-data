import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import reducer from './reducers';
import { fetchMocodingUsers, fetchMocodingFailedRequests } from './actions/mocoding';
import { fetchUsevmUsers, fetchUsevmFailedRequests } from './actions/usevm';
import { fetchUsersData,
         fetchViewsData,
         fetchFailedRequestsData,
         fetchBrowserPageloadTime
       } from './actions/graphicsData'


const mocodingId = '87ab4409-4fb3-43d5-ac3a-ba8ae22d4ffd';
const mocodingKey = 'frihfkvmlkrswusmq1wjegb3brgno15yfuey6j6p';

const usevmId = '3d6f5bed-c7f4-4ae9-be88-2faf24cb753b';
const usevmKey = 'ny2f1usn2sas2i2a0bcft7ej2nig5roep2nvdfpc';


const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(reducer, middleware);


store.dispatch(fetchMocodingUsers('FETCH_MOCODING_USERS_PER_DAY', 'P1D'));
store.dispatch(fetchMocodingUsers('FETCH_MOCODING_USERS_PER_WEEK', 'P7D'));
store.dispatch(fetchMocodingUsers('FETCH_MOCODING_USERS_PER_MONTH', 'P31D'));

store.dispatch(fetchUsevmUsers('FETCH_USEVM_USERS_PER_DAY', 'P1D'));
store.dispatch(fetchUsevmUsers('FETCH_USEVM_USERS_PER_WEEK', 'P7D'));
store.dispatch(fetchUsevmUsers('FETCH_USEVM_USERS_PER_MONTH', 'P31D'));

store.dispatch(fetchMocodingFailedRequests('FETCH_MOCODING_FAILED_REQUESTS_PER_DAY', 'P1D'));
store.dispatch(fetchMocodingFailedRequests('FETCH_MOCODING_FAILED_REQUESTS_PER_WEEK', 'P7D'));
store.dispatch(fetchMocodingFailedRequests('FETCH_MOCODING_FAILED_REQUESTS_PER_MONTH', 'P31D'));

store.dispatch(fetchUsevmFailedRequests('FETCH_USEVM_FAILED_REQUESTS_PER_DAY', 'P1D'));
store.dispatch(fetchUsevmFailedRequests('FETCH_USEVM_FAILED_REQUESTS_PER_WEEK', 'P7D'));
store.dispatch(fetchUsevmFailedRequests('FETCH_USEVM_FAILED_REQUESTS_PER_MONTH', 'P31D'));





store.dispatch(fetchUsersData('FETCH_MOCODING_USERS', mocodingId, mocodingKey, '&interval=P1D'));
store.dispatch(fetchUsersData('FETCH_USEVM_USERS', usevmId, usevmKey, '&interval=P1D'));

store.dispatch(fetchViewsData('FETCH_MOCODING_VIEWS', mocodingId, mocodingKey));
store.dispatch(fetchViewsData('FETCH_USEVM_VIEWS', usevmId, usevmKey));

store.dispatch(fetchFailedRequestsData('FETCH_MOCODING_FAILED_REQUESTS', mocodingId, mocodingKey));
store.dispatch(fetchFailedRequestsData('FETCH_USEVM_FAILED_REQUESTS', usevmId, usevmKey));

store.dispatch(fetchUsersData('FETCH_MOCODING_UNIC_USERS', mocodingId, mocodingKey, ''));
store.dispatch(fetchUsersData('FETCH_USEVM_UNIC_USERS', usevmId, usevmKey, ''));

store.dispatch(fetchBrowserPageloadTime('FETCH_MOCODING_AVERAGE_ACCESS_TIME', mocodingId, mocodingKey));
store.dispatch(fetchBrowserPageloadTime('FETCH_USEVM_AVERAGE_ACCESS_TIME', usevmId, usevmKey));

// store.subscribe(() => {
//   console.log(store.getState())
// })


export default store;
