import React from 'react';
import SignedOutDashboard from './signedOutDashboard/SignedOutDashboard';
import SignedInDashboard from './signedInDashboard/SignedInDashboard';
import { connect } from 'react-redux';
 
function Dashboard(props) {
    return (
        <div>
            {props.auth.uid ? <SignedInDashboard/> : <SignedOutDashboard/>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
};

export default connect(mapStateToProps)(Dashboard);
