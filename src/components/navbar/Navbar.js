import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';

function Navbar(props) {
    const links = props.uid ? <SignedInLinks/> : null;
    return(
        <header>
            <nav>
                <Link to="/">Life Tracker</Link>
                <ul>
                    {links}
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        uid: state.firebase.auth.uid
    }
};

export default connect(mapStateToProps)(Navbar);
