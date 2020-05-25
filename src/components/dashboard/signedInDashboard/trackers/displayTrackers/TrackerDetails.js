import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteTracker } from '../../../../../store/actions/trackerActions';

class TrackerDetails extends React.Component {
    state = {
        deleteRequest: false
    }

    handleDelete = () => {
        if(this.state.deleteRequest)
            this.props.deleteTracker(this.props.tracker.id);
        else
            this.setState({deleteRequest: true});
    }

    render() {
        const { tracker } = this.props;
        return (
            <tr>
                <td>{tracker.name}</td>
                <td>
                    {
                        typeof tracker.lastUpdatedAt === 'string' ?
                        tracker.lastUpdatedAt :
                        moment(tracker.lastUpdatedAt.toDate()).format('lll')
                    }
                </td>
                <td>{moment(tracker.createdAt.toDate()).format('lll')}</td>
                <td>{tracker.trackedDaysCount}</td>
                <td>Add Data</td>
                <td>View Chart</td>
                <td>Edit</td>
                <td>
                    <button onClick={this.handleDelete} type="button">
                        {this.state.deleteRequest ?
                        'Are you sure?' :
                        'Delete'}
                    </button>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTracker: (trackerID) => dispatch(deleteTracker(trackerID))
    }
};

export default connect(null, mapDispatchToProps)(TrackerDetails);