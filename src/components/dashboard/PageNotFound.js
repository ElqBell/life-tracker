import React from 'react';
import {Link} from 'react-router-dom';

function PageNotFound() {
    return(
        <div>
            <h1>Sorry, but this page does not exist.</h1>
            <Link to="/">Go to home page</Link>
        </div>
    )
}

export default PageNotFound;
