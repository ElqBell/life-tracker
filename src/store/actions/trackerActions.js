export const createTracker = (trackerData, uid) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.doc(`users/${uid}/trackers/${trackerData.name}`).set({
            fieldsCount: trackerData.fieldsCount
        })
        .then(dispatch({ type: 'CREATE_TRACKER_SUCCESS', trackerData }))
        .catch(error => dispatch({ type: 'CREATE_TRACKER_ERROR', error}));
    };
};