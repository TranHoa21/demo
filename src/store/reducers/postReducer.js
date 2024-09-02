const initialState = {
    posts: [],
    like: '',
    id: '',
    comment: '',
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POST':
            return {
                ...state,
                posts: action.payload
            };
        case 'LIKE_POST':
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post.id === action.payload ? { ...post, like: true } : post
                )
            };
        case 'UNLIKE_POST':
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post.id === action.payload ? { ...post, like: false } : post
                )
            };
        case 'ADD_COMMENT':
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post.id === action.payload.postId ?
                        {
                            ...post,
                            comments: [...post.comments, action.payload.comment]
                        } :
                        post
                )
            };
        case 'DELETE_COMMENT':
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post.id === action.payload.postId ?
                        {
                            ...post,
                            comments: post.comments.filter((comment) => comment !== action.payload.commentId)
                        } :
                        post
                )
            };
        default:
            return state;
    }
};

export default postReducer;