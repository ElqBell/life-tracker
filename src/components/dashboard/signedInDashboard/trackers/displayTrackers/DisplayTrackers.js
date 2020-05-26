import React from 'react';
import { connect } from 'react-redux';
import TrackerSummary from './TrackerSummary';

function DisplayTrackers(props) {
    const { trackers } = props;

    return (
        <div>
            <h1>DISPLAY TRACKERS!</h1>
            <div>
                {
                trackers ?
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
                                {trackers.map(tracker => <TrackerSummary tracker={tracker} key={tracker.id}/>)}
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
        trackers: state.firestore.ordered.trackers
    }
};

export default connect(mapStateToProps)(DisplayTrackers);
