import React, { useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteTracker } from '../../../../../store/actions/trackerActions';
import { Link } from 'react-router-dom';

function TrackerSummary({ tracker, deleteTracker }) {
    const [deleteRequest, setDeleteRequest] = useState(false);

    const handleDelete = () => {
        if(deleteRequest)
            deleteTracker(tracker.id);
        else
            setDeleteRequest(true);
    }

    return (
        <tr>
            <td><Link to={`dashboard/tracker/${tracker.id}`}>{tracker.name}</Link></td>
            <td>
                {
                typeof tracker.lastUpdatedAt === 'string' ?
                tracker.lastUpdatedAt :
                moment(tracker.lastUpdatedAt.toDate()).format('lll')
                }
            </td>
            <td>{moment(tracker.createdAt.toDate()).format('lll')}</td>
            <td>{tracker.trackedDaysCount}</td>
            <td><Link to={`dashboard/tracker/${tracker.id}`}>Add Data</Link></td>
            <td>View Chart</td>
            <td>Edit</td>
            <td>
                <button onClick={handleDelete} type="button">
                    {deleteRequest ?
                    'Are you sure?' :
                    'Delete'}
                </button>
            </td>
        </tr>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTracker: (trackerID) => dispatch(deleteTracker(trackerID))
    }
};

export default connect(null, mapDispatchToProps)(TrackerSummary);