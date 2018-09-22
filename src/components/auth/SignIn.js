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
            <div>
                {/* <div className="container">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text-darken-3">Sign In</h5>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" onChange={this.handle} />
                        </div>
                        <div className="input-field">
                            <button className="btn blue lighten-1">Login</button>
                        </div>
                    </form>
                </div> */}
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6 offset-m4">
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title">Log In</span>
                                    <form onSubmit={this.handleSubmit} className="white">
                                        <div className="input-field">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" id="email" onChange={this.handleChange} />
                                        </div>
                                        <div className="input-field">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" name="password" id="password" onChange={this.handleChange} />
                                        </div>
                                        <div className="input-field">
                                            <button className="btn blue lighten-1 waves-effect waves-large">Login</button>
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

export default SignIn
