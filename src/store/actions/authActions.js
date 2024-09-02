import { LOGIN_SUCCESS, LOGOUT } from '../type/type';

export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user,
    };
};


export const logout = () => {
    return {
        type: LOGOUT,
    };
};

export const setUserInfo = (userId, token) => ({
    type: 'SET_USER_INFO',
    payload: { userId, token },
});