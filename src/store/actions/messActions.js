// action.js
import { SELECT_CONVERSATION, SET_MESSAGES, TOGGLE_IS_SHOW_CHAT, TOGGLE_IS_SHOW_SIDEBAR, SET_NOTIFICATION } from '../type/type';


export const toggleIsShowChat = (isShowChat) => ({
    type: TOGGLE_IS_SHOW_CHAT,
    payload: isShowChat,
});

export const toggleIsShowSideBar = (isShowSideBar) => ({
    type: TOGGLE_IS_SHOW_SIDEBAR,
    payload: isShowSideBar,
});


export const selectConversation = (conversationInfo) => ({
    type: SELECT_CONVERSATION,
    payload: conversationInfo,
});

export const setMessages = (messages) => ({
    type: SET_MESSAGES,
    payload: messages,
});


export const setNotification = (notifications) => ({
    type: SET_NOTIFICATION,
    payload: notifications,
});


export const setHasNewMessage = (client) => ({
    type: 'SET_HAS_NEW_MESSAGE',
    payload: client,
});

export const setHasNewNotification = (status) => ({
    type: 'SET_HAS_NEW_NOTIFICATION',
    payload: status,
});