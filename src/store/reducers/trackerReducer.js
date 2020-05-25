const trackerReducer = (state = {trackerError: null}, action) => {
    switch(action.type) {
        case 'CREATE_TRACKER_SUCCESS':
            return {
                ...state,
                trackerError: null
            }
        case 'CREATE_TRACKER_ERROR':
            return {
                ...state,
                trackerError: 'Tracker creation failed'
            }
        case 'DELETE_TRACKER_SUCCESS':
            return {
                ...state,
                trackerError: null
            }
        case 'DELETE_TRACKER_ERROR':
            return {
                ...state,
                trackerError: 'Tracker deletion failed'
            }
        default:
            return state;
    }
};

export default trackerReducer;
