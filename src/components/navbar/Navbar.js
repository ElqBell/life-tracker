import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';

function Navbar(props) {
    const links = props.auth.uid ? <SignedInLinks/> : null;
    return(
        <nav>
            <div>
                <Link to="/">Life Tracker</Link>
                <ul>
                    {links}
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
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
