import React, { Component } from "react"
import yak from "../images/yak.png"
import $ from "jquery"
import profilepic from "../images/profile.png"
import "./NavBar.css"


export default class NavBar extends Component {

    // Set initial state
    state = {
        searchTerms: ""
    }

    /**
     * Local search handler, which invokes the searchHandler reference
     * passed from App
     */
    search = (e) => {
        if (e.charCode === 13) {
            this.props.searchHandler(this.state.searchTerms)
            this.setState({ searchTerms: "" })
        }
    }

    LoginLogout = () => {
        if (this.props.activeUser === null) {
            return <a className="nav-link" id="nav__login"
                onClick={this.props.viewHandler} href="#">Login</a>
        } else {
            return <a className="nav-link" id="nav__logout"
                onClick={this.props.viewHandler} href="#">Logout</a>
        }
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" onClick={this.props.viewHandler} href="#">
                    <img id="nav__home" alt="home" src={yak} style={{ height: `50px` }} />
                </a>
                <input id="searchTerms"
                    value={this.state.searchTerms}
                    onChange={this.handleFieldChange}
                    onKeyPress={this.search}
                    className="form-control w-100"
                    type="search"
                    placeholder="Search"
                    aria-label="Search" />
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" id="nav__profile"
                            // onClick={this.props.viewHandler}
                            href="#">
                            <img id="navimg__profile" alt="profile"
                                 onClick={()=>$(".profileMenu").slideToggle(333)}
                                 src={profilepic} style={{ height: `30px` }} />
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <this.LoginLogout />
                    </li>
                </ul>
                <article id="article__profileMenu" className="profileMenu">
                    <section id="section__profileMenu" className="profileMenu__item">
                        <div id="container__notifications"><a onClick={this.props.viewHandler} title="notifications" id="nav__notifications" href="#">Notifications</a></div>
                        <div id="container__MyProfile"><a onClick={this.props.viewHandler} title="myProfile" id="nav__myProfile" href="#">My Profile</a></div>
                        <div id="container__followers"><a onClick={this.props.viewHandler} title="followers" id="nav__followers" href="#">My Followers</a></div>
                        <div id="container__friends"><a onClick={this.props.viewHandler} title="friends" id="nav__friends" href="#">My Friends</a></div>
                    </section>
                </article>
            </nav>
        )
    }
}
