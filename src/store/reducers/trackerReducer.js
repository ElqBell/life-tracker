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
        case 'ADD_FIELD_DATA_SUCCESS':
            return {
                ...state,
                trackerError: null
            }
        case 'ADD_FIELD_DATA_ERROR':
            return {
                ...state,
                trackerError: 'Adding field data failed'
            }
        case 'DELETE_TRACKED_DAY_DATA_SUCCESS':
            return {
                ...state,
                trackerError: null
            }
        case 'DELETE_TRACKED_DAY_DATA_ERROR':
            return {
                ...state,
                trackerError: 'Deleting day data failed'
            }
        default:
            return state;
    }
};

export default trackerReducer;
