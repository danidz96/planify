import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form className="white col s12 l6 offset-l3" onSubmit={this.handleSubmit}>
                        <h5 className="grey-text text-darken-3">Sign In</h5>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <button className="btn blue lighten-1 z-depth-0">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn
