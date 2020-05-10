import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        passwordRepeat: ''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.password === this.state.passwordRepeat) {
            this.props.signup(this.state);
            console.log('sign up successful', this.state);
        }
        else
            console.log('sign up error', this.state);
    }

    render() {
        if(this.props.auth.uid)
            return <Redirect to='/'/>
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h5>Sign up</h5>
                    <label htmlFor="email">Email</label>
                    <input onChange={this.handleChange} type="email" id="email" required/>

                    <label htmlFor="password">Password</label>
                    <input onChange={this.handleChange} type="password" id="password" required/>

                    <label htmlFor="passwordRepeat">Repeat password</label>
                    <input onChange={this.handleChange} type="password" id="passwordRepeat" required/>

                    <div><button type="submit">Sign up</button></div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (credentials) => dispatch(signup(credentials))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
