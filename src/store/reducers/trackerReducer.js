const trackerReducer = (state = {createError: null}, action) => {
    switch(action.type) {
        case 'CREATE_TRACKER_SUCCESS':
            return {
                ...state,
                createError: null
            }
        case 'CREATE_TRACKER_ERROR':
            return {
                ...state,
                createError: 'Tracker creation failed'
            }
        default:
            return state;
    }
};

export default trackerReducer;
