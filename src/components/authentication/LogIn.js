import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class LogIn extends React.Component {
    state = {
        email: '',
        password: ''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state);
    }

    render() {
        if(this.props.uid)
            return <Redirect to='/'/>
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h5>Log in</h5>
                    <label htmlFor="email">Email</label>
                    <input onChange={this.handleChange} type="email" id="email" required/>

                    <label htmlFor="password">Password</label>
                    <input onChange={this.handleChange} type="password" id="password" required/>

                    <button type="submit">Log in</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        uid: state.firebase.auth.uid
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (credentials) => dispatch(login(credentials))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
