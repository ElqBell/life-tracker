import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import TrackerDetails from './TrackerDetails';

function DisplayTrackers(props) {
    const { trackers } = props;
    return (
        <div>
            <h1>DISPLAY TRACKERS!</h1>
            <div>
                {trackers ?
                    trackers.length > 0 ?
                        <table>
                            <thead>
                                <tr>
                                    <th>Tracker Name</th>
                                    <th>Last Updated</th>
                                    <th>Creation Date</th>
                                    <th>Tracked Days Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trackers.map(tracker => <TrackerDetails tracker={tracker} key={tracker.id}/>)}
                            </tbody>
                        </table>
                        : <p>No trackers found!</p> 
                    : null   
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        uid: state.firebase.auth.uid,
        trackers: state.firestore.ordered.trackers
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
        if(!props.uid) return [];
        return [{
            collection: 'users',
            doc: props.uid,
            subcollections: [{ collection: 'trackers' }],
            storeAs: 'trackers'
        }]
    }),
)(DisplayTrackers);
