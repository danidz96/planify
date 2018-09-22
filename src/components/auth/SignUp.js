import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
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
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6 offset-m4">
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title">Sign Up</span>
                                    <form onSubmit={this.handleSubmit} className="white">
                                        <div className="input-field">
                                            <label htmlFor="firstName">Name</label>
                                            <input type="text" name="firstName" id="firstName" onChange={this.handleChange} />
                                        </div>
                                        <div className="input-field">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input type="text" name="lastName" id="lastName" onChange={this.handleChange} />
                                        </div>
                                        <div className="input-field">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" id="email" onChange={this.handleChange} />
                                        </div>
                                        <div className="input-field">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" name="password" id="password" onChange={this.handleChange} />
                                        </div>
                                        <div className="input-field">
                                            <button className="btn blue lighten-1 waves-effect waves-large">Sign Up</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp
