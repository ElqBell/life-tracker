import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import AddData from '../addData/AddData';
import { useFirestoreConnect } from 'react-redux-firebase';
import { deleteTrackedDay } from '../../../../../store/actions/trackerActions';
import DayDataDetails from './DayDataDetails';

function TrackerDetails(props) {
    const { tracker, uid, trackedData, fieldNames } = props;
    useFirestoreConnect(() => {
        if(!tracker) return [];
        return [{
            collection: `users/${uid}/trackers/${tracker.id}/trackedData`,
            storeAs: 'trackedData'
            }]
    });
    
    return (
        <div>
            {
            tracker && trackedData ?
                <div>
                    <h3>{tracker.name}</h3>
                    <p>Tracker creation date: {moment(tracker.createdAt.toDate()).format('lll')}</p>
                    <p>
                        Last update: 
                        {
                            typeof tracker.lastUpdatedAt === 'string' ?
                            tracker.lastUpdatedAt :
                            moment(tracker.lastUpdatedAt.toDate()).format('lll')
                        }
                    </p>
                    <p>Tracked days count: {tracker.trackedDaysCount}</p>
                    <AddData trackerID={tracker.id}/>
                    <table>
                        <DayDataDetails
                            tracker={tracker}
                            trackedData={trackedData}
                            fieldNames={fieldNames}
                            deleteTrackedDay={deleteTrackedDay}
                        />
                    </table>
                </div>
            : null
            }
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const trackedData = state.firestore.ordered.trackedData;
    const trackers = state.firestore.ordered.trackers;
    const thisTracker = trackers ?
                    trackers.find(tracker => tracker.id === ownProps.match.params.id) :
                    null;
    const fieldNames = trackers ?
                        trackers.find(tracker => tracker.id === thisTracker.id).fieldNames :
                        null;
    return {
        uid: state.firebase.auth.uid,
        trackedData,
        fieldNames,
        tracker: thisTracker
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTrackedDay: (ids) => dispatch(deleteTrackedDay(ids))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackerDetails);
