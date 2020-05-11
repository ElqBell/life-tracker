import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
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
          <Route exact path="/" component={Dashboard}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/login" component={LogIn}/>
          <Route component={PageNotFound}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
