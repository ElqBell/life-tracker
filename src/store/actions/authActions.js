export const signup = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().createUserWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
        .then(dispatch({ type: 'SIGNUP_SUCCESS', credentials }))
        .catch(error => dispatch({ type: 'SIGNUP_ERROR', error}));
    };
};

export const login = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
        .then(() => {
            dispatch({ type: 'LOGIN_SUCCESS', credentials });
        })
        .catch(error => dispatch({ type: 'LOGIN_ERROR', error}));
    };
};

export const logout = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(dispatch({ type: 'LOGOUT_SUCCESS' }))
        .catch(error => dispatch({ type: 'LOGOUT_ERROR', error}));
    };
};
