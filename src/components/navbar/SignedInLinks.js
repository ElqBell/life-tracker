import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authActions';

function SignedInLinks(props) {
    return(
        <ul>
            <li><button onClick={props.logout} type="button">Log Out</button></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(null, mapDispatchToProps)(SignedInLinks);