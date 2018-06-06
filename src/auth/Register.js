import React, { Component } from "react"

export default class Register extends Component {
    
    state = {
        email: "",
        password: "",
        fName: "",
        lName: "",
        location: "",
    }

    MoveToLogin = () => {
        console.log("Am I working correctly?")
        this.props.showView("login")
    } 


    handleEmailChange = (evt) => {
        this.setState({ email: evt.target.value })
    }

    handlefNameChange = (evt) => {
        this.setState({ fName: evt.target.value })
    }

    handlelNameChange = (evt) => {
        this.setState({ lName: evt.target.value })
    }

    handleLocationChange = (evt) => {
        this.setState({ location: evt.target.value })
    }

    handlePasswordChange = (evt) => {
        this.setState({ password: evt.target.value })
    }

    handleRegistration = function (e) {
        e.preventDefault()

        // Determine if a user already exists in API
        fetch(`http://localhost:5001/users?email=${this.state.email}`)
            .then(r => r.json())
            .then(user => {
                // User exists. Alert them that they already have an account
                if (user.length) {
                    return alert("This email is already registered!")

                    // User doesn't exist
                } else {
                    // Create user in API
                    fetch("http://localhost:5001/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ email: this.state.email, password: this.state.password, fName: this.state.fName, lName: this.state.lName, location: this.state.location })
                    })
                    .then(r => r.json())
                    // Set local storage with newly created user's id and show home view
                    .then(newUser => {
                        this.props.setActiveUser(newUser.id)
                        this.props.showView("home")
                    })
                }

            })
    }.bind(this)

    
    render() {
        return (
            <div>
                <h1>Register</h1>
                <form className="form-signin" onSubmit={this.handleRegistration}>
                    <h1 className="h3 mb-3 font-weight-normal">New to Yak? Register below!</h1>
                    <input onChange={this.handleEmailChange} type="email" id="email" className="form-control" placeholder="Email Address" required="" autoFocus="" />
                    <input onChange={this.handlefNameChange}type="text" id="fName" className="form-control" placeholder="First Name" required="" />
                    <input onChange={this.handlelNameChange}type="text" id="lName" className="form-control" placeholder="Last Name" required="" />
                    <input onChange={this.handlePasswordChange} type="password" id="password" className="form-control" placeholder="Password" required="" />
                    <input onChange={this.handleLocationChange}type="text" id="location" className="form-control" placeholder="Location" required="" />
                    
                    <div className="checkbox mb-3">
                        <input type="checkbox" value="remember-me" /> Remember me
                    </div>
                    {/* <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button> */}
                    <button className="btn btn-lg btn-info btn-block" type="submit">Register</button>
                    <h4>Already a Yak user?</h4>
                    <button className="btn btn-lg btn-primary btn-block" onClick={this.MoveToLogin} type="button">Login</button>
                    <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
                </form>
            </div>
        )
    }
}