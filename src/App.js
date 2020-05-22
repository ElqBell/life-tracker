import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import About from './components/dashboard/about/About';
import Contact from './components/dashboard/contact/Contact';
import SignUp from './components/authentication/SignUp';
import LogIn from './components/authentication/LogIn';
import Footer from './components/footer/Footer';
import PageNotFound from './components/dashboard/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard"/>
          </Route>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/login" component={LogIn}/>
          <Route component={PageNotFound}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
