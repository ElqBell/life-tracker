import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authActions';

function SignedInLinks(props) {
    return(
        <li>
            <button onClick={props.logout} type="button">Log Out</button>
        </li>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
