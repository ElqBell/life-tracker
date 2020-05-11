import React from 'react';
import Charts from './Charts';
import Trackers from './Trackers';
import { NavLink, Route } from 'react-router-dom';

function SignedInDashboard() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/dashboard/trackers">Trackers</NavLink></li>
                        <li><NavLink to="/dashboard/charts">Charts</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Route exact path="/" component={Trackers}/>
                <Route path="/dashboard/trackers" component={Trackers}/>
                <Route path="/dashboard/charts" component={Charts}/>
            </main>
        </div>
    )
}

export default SignedInDashboard;
