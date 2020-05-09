const authReducer = (state = {authError: null}, action) => {
    switch(action.type) {
        case 'SIGNUP_SUCCESS':
            console.log('signup success', action.credentials);
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error', action.error.message);
            return {
                ...state,
                authError: 'Signup failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success', action.credentials);
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_ERROR':
            console.log('login error', action.error.message);
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGOUT_SUCCESS':
            console.log('logout success');
            return {
                ...state,
                authError: null
            }
        case 'LOGOUT_ERROR':
            console.log('logout error', action.error.message);
            return {
                ...state,
                authError: 'Logout failed'
            }
        default:
            return state;
    }
};

export default authReducer;
