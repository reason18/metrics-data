export default function reducer(state={
  fetching: false,
  fetched: false,
  perDay: 0,
  perWeek: 0,
  perMonth: 0,
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_USEVM_FAILED_REQUESTS_PER_DAY_PENDING' : {
      return { ...state, fetching: true}
    }
    case 'FETCH_USEVM_FAILED_REQUESTS_PER_DAY_REJECTED' : {
      return { ...state, fetching: false, error: action.payload}
    }
    case 'FETCH_USEVM_FAILED_REQUESTS_PER_DAY_FULFILLED' : {
      return { ...state, fetching: false, fetched: true, perDay: action.payload}
    }
    case 'FETCH_USEVM_FAILED_REQUESTS_PER_WEEK_PENDING' : {
      return { ...state, fetching: true}
    }
    case 'FETCH_USEVM_FAILED_REQUESTS_PER_WEEK_REJECTED' : {
      return { ...state, fetching: false, error: action.payload}
    }
    case 'FETCH_USEVM_FAILED_REQUESTS_PER_WEEK_FULFILLED' : {
      return { ...state, fetching: false, fetched: true, perWeek: action.payload}
    }
    case 'FETCH_USEVM_FAILED_REQUESTS_PER_MONTH_PENDING' : {
      return { ...state, fetching: true}
    }
    case 'FETCH_USEVM_FAILED_REQUESTS_PER_MONTH_REJECTED' : {
      return { ...state, fetching: false, error: action.payload}
    }
    case 'FETCH_USEVM_FAILED_REQUESTS_PER_MONTH_FULFILLED' : {
      return { ...state, fetching: false, fetched: true, perMonth: action.payload}
    }
    default:
      return state;
  }
}
