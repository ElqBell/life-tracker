import React from 'react';
import {Link} from 'react-router-dom';

function SignedOutLinks() {
    return(
        <ul>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Log In</Link></li>
        </ul>
    )
}

export default SignedOutLinks;
