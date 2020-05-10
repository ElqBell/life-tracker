import React from 'react';
import DashboardSignedOut from './DashboardSignedOut';
import DashboardSignedIn from './DashboardSignedIn';
import { connect } from 'react-redux';
 
function Dashboard(props) {
    const dashboard = props.auth.uid ? <DashboardSignedIn/> : <DashboardSignedOut/>;
    return (
        <div>
            {dashboard}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
};

export default connect(mapStateToProps)(Dashboard);
