import React from 'react';

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
        if(this.state.password === this.state.passwordRepeat)
            console.log('sign up successful', this.state);
        else
            console.log('sign up error', this.state);
    }

    render() {
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

export default SignUp;