import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Trackers from './trackers/Trackers';
import Charts from './charts/Charts';
import TrackerDetails from './trackers/displayTrackers/TrackerDetails';

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
                    <Route path="/dashboard/tracker/:id" component={TrackerDetails}/>
                </Switch>
            </main>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        uid: state.firebase.auth.uid
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
        if(!props.uid) return [];
        return [{
            collection: 'users',
            doc: props.uid,
            subcollections: [{ collection: 'trackers' }],
            storeAs: 'trackers'
        }]
    }),
)(SignedInDashboard);
