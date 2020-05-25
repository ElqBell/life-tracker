export const createTracker = (trackerData) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const state = getState();
        firestore.collection(`users/${state.firebase.auth.uid}/trackers`).add({
            name: trackerData.name,
            createdAt: new Date(),
            lastUpdatedAt: 'Never',
            trackedDaysCount: 0,
            fieldsCount: trackerData.fieldsCount
        })
        .then(dispatch({ type: 'CREATE_TRACKER_SUCCESS' }))
        .catch(error => dispatch({ type: 'CREATE_TRACKER_ERROR', error}));
    };
};

export const deleteTracker = (trackerID) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const state = getState();
        firestore.doc(`users/${state.firebase.auth.uid}/trackers/${trackerID}`).delete()
        .then(dispatch({ type: 'DELETE_TRACKER_SUCCESS' }))
        .catch(error => dispatch({ type: 'DELETE_TRACKER_ERROR', error}));
    };
};