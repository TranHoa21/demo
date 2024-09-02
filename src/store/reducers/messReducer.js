
import { SELECT_CONVERSATION, SET_MESSAGES, TOGGLE_IS_SHOW_CHAT, TOGGLE_IS_SHOW_SIDEBAR, SET_NOTIFICATION } from '../type/type';


const initialState = {
    selectedConversation: null,
    messages: [],
    isShowChat: false,
    isShowSideBar: true,
    unreadCounts: {},
    notifications: [],
    status: true,
};

const conversationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CONVERSATION:
            return {
                ...state,
                selectedConversation: action.payload,
            };

        case SET_MESSAGES:
            return {
                ...state,
                messages: action.payload,
            };

        case TOGGLE_IS_SHOW_CHAT:
            return {
                ...state,
                isShowChat: action.payload,
            };

        case TOGGLE_IS_SHOW_SIDEBAR:
            return {
                ...state,
                isShowSideBar: action.payload,
            };

        case 'UPDATE_UNREAD_COUNT':
            return {
                ...state,
                unreadCounts: {
                    ...state.unreadCounts,
                    [action.payload.conversationId]: action.payload.count,
                },
            };

        case 'LOAD_UNREAD_COUNTS':
            return {
                ...state,
                unreadCounts: action.payload,
            };

        case SET_NOTIFICATION:
            return {
                ...state,
                notifications: action.payload,
            };

        case 'UPDATE_UNREAD_COUNT_NOTIFICATION':
            return {
                ...state,
                unreadCounts: {
                    ...state.unreadCounts,
                    [action.payload.conversationId]: {
                        notificationId: action.payload.notificationId,
                        count: action.payload.count,
                    },
                },
            };

        case 'LOAD_UNREAD_COUNTS_NOTIFICATION':
            return {
                ...state,
                unreadCounts: action.payload,
            };

        case 'SET_HAS_NEW_MESSAGE':
            return {
                ...state,
                hasNewMessage: action.payload,
            };

        case 'SET_HAS_NEW_NOTIFICATION':
            return {
                ...state,
                status: action.payload,
            };

        default:
            return state;
    }
};

export default conversationReducer;
