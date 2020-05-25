import React from 'react';
import SignedOutDashboard from './signedOutDashboard/SignedOutDashboard';
import SignedInDashboard from './signedInDashboard/SignedInDashboard';
import { connect } from 'react-redux';
 
function Dashboard(props) {
    return (
        <div>
            {props.uid ? <SignedInDashboard/> : <SignedOutDashboard/>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        uid: state.firebase.auth.uid
    }
};

export default connect(mapStateToProps)(Dashboard);
