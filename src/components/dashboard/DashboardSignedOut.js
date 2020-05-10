import React from 'react';
import { Link } from 'react-router-dom';

function DashboardSignedOut() {
    return (
        <div>
            <h1>signed out dashboard</h1>
            <main>
                <article>
                    <p>Want to be in control of your life?</p>
                    <p>Join Life Tracker now !</p>
                </article>
            </main>
            <aside>
                <p>Want to create an account?</p>
                <button type="button">
                    <Link to={'/signup'}>Sign Up</Link>
                </button>
                <br/>
                <p>Already have an account?</p>
                <button type="button">
                    <Link to={'/login'}>Log In</Link>
                </button>
            </aside>
        </div>
    )
}

export default DashboardSignedOut;
