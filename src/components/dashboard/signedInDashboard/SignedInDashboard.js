import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Trackers from './trackers/Trackers';
import Charts from './charts/Charts';

function SignedInDashboard() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/dashboard">Trackers</NavLink></li>
                        <li><NavLink to="/dashboard/charts">Charts</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Switch>
                    <Route exact path="/dashboard" component={Trackers}/>
                    <Route path="/dashboard/charts" component={Charts}/>
                </Switch>
            </main>
        </div>
    )
}

export default SignedInDashboard;
