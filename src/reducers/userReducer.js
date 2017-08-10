import {INITIAL_STATE} from '../model';

import {
    REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE,
    LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE,
} from '../actions/userActions'

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case REGISTER_USER:
            state = {
                ...state,
                user: {
                    ...state.user,
                    loading: action.loading
                }
            };
            break;


        case REGISTER_USER_SUCCESS:
            state = {
                ...state,
                user: {
                    ...state.user,
                    data: action.data,
                    loading: action.loading
                }
            };

            break;

        case REGISTER_USER_FAILURE:
            state = {
                ...state,
                user: {
                    ...state.user,
                    error: action.error,
                    loading: action.loading
                }
            };
            break;

        case LOGIN:
            state = {
                ...state,
                user: {
                    ...state.user,
                    loading: action.loading
                }
            };
            break;


        case LOGIN_SUCCESS:
            state = {
                ...state,
                user: {
                    ...state.user,
                    data: action.data,
                    loading: action.loading
                }
            };

            break;

        case LOGIN_FAILURE:
            state = {
                ...state,
                user: {
                    ...state.user,
                    error: action.error,
                    loading: action.loading
                }
            };
            break;

        default:
            state = {
                ...state
            }
          break;

    }
    return state;
};

export default userReducer;