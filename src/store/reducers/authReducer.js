const authReducer = (state = {authError: null}, action) => {
    switch(action.type) {
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: 'Signup failed'
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case 'LOGOUT_ERROR':
            return {
                ...state,
                authError: 'Logout failed'
            }
        default:
            return state;
    }
};

export default authReducer;
