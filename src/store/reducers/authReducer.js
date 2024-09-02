// Định nghĩa các loại hành động (Action Types)
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

// Trạng thái ban đầu (Initial State)
const initialState = {
    isLoggedIn: false,
    token: '',
    error: ""
};

// Hàm giảm thiểu xác thực (Auth Reducer)
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload.token,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                token: '',
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                token: '',
            };
        default:
            return state;
    }
};

export default authReducer;
