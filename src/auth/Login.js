import React, { Component } from "react"
import "./login.css"


export default class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = function (evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }.bind(this)

    // Handle for login submit
    handleLogin = function (e) {
        e.preventDefault()

        // Determine if a user already exists in API
        fetch(`http://localhost:5001/users?email=${this.state.email}&password=${this.state.password}`)
            .then(r => r.json())
            .then(user => {
                // User exists. Set local storage, and show home view
                if (user.length) {
                    this.props.setActiveUser(user[0].id)
                    this.props.showView("home")

                    // User doesn't exist

                } else {
                    alert("Email not recognized, please register as a new user!");
                }  
            })
    }.bind(this)

    handleEmailChange = (evt) => {
        this.setState({ email: evt.target.value })
    }

    handlePasswordChange = (evt) => {
        this.setState({ password: evt.target.value })
    }

    MoveToRegister = () => {
        console.log("Am I working correctly?")
        this.props.showView("register")
    } 

    render() {
        return (
            <form className="form-signin" onSubmit={this.handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input onChange={this.handleEmailChange} type="email" id="email" className="form-control" placeholder="Email address" required="" autoFocus="" />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input onChange={this.handlePasswordChange} type="password" id="password" className="form-control" placeholder="Password" required="" />
                <div className="checkbox mb-3">
                    <input type="checkbox" value="remember-me" /> Remember me
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <h4>First timer?</h4>
                <button className="btn btn-lg btn-info btn-block" onClick={this.MoveToRegister} type="button">Register</button>
                <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
            </form>
        )
    }
}