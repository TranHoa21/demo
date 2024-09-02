import { createStore, combineReducers } from 'redux';
import authReducer from '@/app/store/reducers/authReducer';
import userReducer from '@/app/store/reducers/userReducer';
import postReducer from '@/app/store/reducers/postReducer';
import bookingReducer from '@/app/store/reducers/bookingReducer';
import socketReducer from './reducers/socketReducers';
import messReducer from './reducers/messReducer';
import authTokenReducer from './reducers/authTokenReducer';

// Root reducer combining all individual reducers
const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    post: postReducer,
    booking: bookingReducer,
    socket: socketReducer,
    mess: messReducer,
    token: authTokenReducer,
});

// Creating the Redux store using the combined reducer
const store = createStore(rootReducer);

export default store;
