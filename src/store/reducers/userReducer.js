

const initialState = {
    name: '',
    id: 0,
    email: '',
    avatar: '',
    role: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                avatar: action.payload.avatar,
                role: action.payload.role,
            };
        default:
            return state;
    }
};

export default userReducer;
