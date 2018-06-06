import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import NavBar from './nav/NavBar';
import Home from './newsfeed/Home';
import Profile from './user/Profile';
import Notifications from './user/Notifications';
import FollowersView from './friends/FollowersView';
import FriendsView from './friends/FriendsView';
import Login from './auth/Login';
import SearchResults from './search/SearchResults';
import Register from "./auth/Register"

class App extends Component {

    // Set initial state
    state = {
        currentView: "login",
        searchTerms: "",
        activeUser: localStorage.getItem("yakId")
    }

    // Search handler -> passed to NavBar
    performSearch = function (terms) {
        this.setState({
            searchTerms: terms,
            currentView: "results"
        })
    }.bind(this)

    // Function to update local storage and set activeUser state
    setActiveUser = (val) => {
        if (val) {
            localStorage.setItem("yakId", val)
        } else {
            localStorage.removeItem("yakId")
        }
        this.setState({
            activeUser: val
        })
    }

    // View switcher -> passed to NavBar and Login
    // Argument can be an event (via NavBar) or a string (via Login)
    showView = function (e) {
        let view = null

        // Click event triggered switching view
        if (e.hasOwnProperty("target")) {
            view = e.target.id.split("__")[1]

            // View switch manually triggered by passing in string
        } else {
            view = e
        }

        // If user clicked logout in nav, empty local storage and update activeUser state
        if (view === "logout") {
            this.setActiveUser(null)
        }

        // Update state to correct view will be rendered
        this.setState({
            currentView: view
        })

    }.bind(this)

    /*
        Function to determine which main view to render.

        TODO:
            1. Profile view
            2. Register view
            3. Create event view
    */
    View = () => {
        if (localStorage.getItem("yakId") === null) {
            switch (this.state.currentView) {
                case "register":
                    return <Register setActiveUser={this.setActiveUser} showView={this.showView} />
            default:
                return <Login showView={this.showView} setActiveUser={this.setActiveUser} />
            }
        } else {
            switch (this.state.currentView) {
                case "logout":
                    return <Login showView={this.showView} setActiveUser={this.setActiveUser} />
                case "results":
                    return <SearchResults viewHandler={this.showView}  terms={this.state.searchTerms} />
                case "profile":
                    return <Profile />
                case "notifications":
                    return <Notifications/>
                case "followers":
                    return <FollowersView/>
                case "friends":
                    return <FriendsView/>
                case "home":
                default:
                    return <Home activeUser={this.state.activeUser} />
            }
        }
    }

    render() {
        return (
            <article>
                <NavBar viewHandler={this.showView}
                    searchHandler={this.performSearch}
                    activeUser={this.state.activeUser}
                    setActiveUser={this.setActiveUser}
                />
                {this.View()}
            </article>
        )
    }
}

export default App
