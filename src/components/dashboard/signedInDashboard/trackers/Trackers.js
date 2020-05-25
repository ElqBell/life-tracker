import React from 'react';
import CreateTracker from './CreateTracker';
import DisplayTrackers from './displayTrackers/DisplayTrackers';

function Trackers() {
    return (
        <div>
            <h1>TRACKERS!</h1>
            <CreateTracker/>
            <DisplayTrackers/>
        </div>
    )
}

export default Trackers;
