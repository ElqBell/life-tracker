import React from 'react';
import { connect } from 'react-redux';

function TrackerDetails({ tracker }) {
    return (
        <div>
            {
            tracker ?
                <div>
                    <p>{tracker.name}</p>
                    <p>{tracker.id}</p>
                </div>
            : null
            }
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const trackers = state.firestore.ordered.trackers;
    const tracker = trackers ?
                    trackers.find(tracker => tracker.id === ownProps.match.params.id) :
                    null;
    return {
        uid: state.firebase.auth.uid,
        tracker
    }
};

export default connect(mapStateToProps)(TrackerDetails);
