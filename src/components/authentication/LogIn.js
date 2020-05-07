import React from 'react';

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
        console.log('login', this.state);
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

export default LogIn;