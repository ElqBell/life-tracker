import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

function Navbar(props) {
    const links = props.auth.uid ? <SignedInLinks/> : <SignedOutLinks/>;
    return(
        <nav>
            <div>
                <Link to="/">Life Tracker</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
};

export default connect(mapStateToProps)(Navbar);
