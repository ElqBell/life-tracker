import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/actions/authActions';

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
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h5>Log in</h5>
                    <label htmlFor="email">Email</label>
                    <input onChange={this.handleChange} type="email" id="email" required/>

                    <label htmlFor="password">Password</label>
                    <input onChange={this.handleChange} type="password" id="password" required/>

                    <div><button type="submit">Log in</button></div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (credentials) => dispatch(login(credentials))
    }
};

export default connect(null, mapDispatchToProps)(LogIn);
