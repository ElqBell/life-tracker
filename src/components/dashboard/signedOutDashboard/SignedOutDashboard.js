import React from 'react';
import { Link } from 'react-router-dom';

function SignedOutDashboard() {
    return (
        <main>
            <section>
                <article>
                    <p>Want to be in control of your life?</p>
                    <p>Join Life Tracker now !</p>
                </article>
            </section>
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
        </main>
    )
}

export default SignedOutDashboard;
