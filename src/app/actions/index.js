import * as types from './types';
import * as fromReducers from '../reducers';
import * as apiCalls from '../api';
import fetchData from './fetch';


const fetchToken = fetchData(apiCalls.fetchToken, fromReducers.isFetchingAuth, types.CREDENTIALS_FETCH);


export {fetchToken};