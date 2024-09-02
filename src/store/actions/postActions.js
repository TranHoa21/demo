export const setPost = (post) => ({
    type: 'SET_POST',
    payload: post
});

export const likePost = (likedPostId, likedUserId) => ({
    type: 'LIKE_POST',
    payload: { postId: likedPostId, userId: likedUserId }
});

export const unlikePost = (likedPostId, likedUserId) => ({
    type: 'UNLIKE_POST',
    payload: { postId: likedPostId, userId: likedUserId }
});


export const addComment = (postId, comment) => ({
    type: 'ADD_COMMENT',
    payload: {
        postId,
        comment
    }
});

export const deleteComment = (postId, commentId) => ({
    type: 'DELETE_COMMENT',
    payload: {
        postId,
        commentId
    }
});