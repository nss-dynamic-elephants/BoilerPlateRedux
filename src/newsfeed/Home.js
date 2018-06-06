import React, { Component } from "react"
import "./Home.css"
import PostList from "./PostList";
import AdList from "../ads/AdList";
import FriendList from "../friends/FriendList";
import GetEvents from "../events/getEvents";

export default class Home extends Component {

    state = {
        message: "",
        posts: []
    }

    postMessage = (text) => fetch("http://localhost:5001/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: this.state.message,
            userId: this.props.activeUser
        })
    })
    .then(() => {
        return fetch("http://localhost:5001/posts?_sort=id&_order=desc&_expand=user")
    })
    .then(r => r.json())
    .then(posts => {
        this.setState({
            message: "",
            posts: posts
        })
    })

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    componentDidMount() {
        fetch(`http://localhost:5001/posts?userId=${this.props.activeUser}&_expand=user&_sort=id&_order=desc`)
            .then(r => r.json())
            .then(posts => this.setState({ posts: posts }))
    }

    render() {
        return (
            <div className="container-full">
                <div className="row">
                    <div className="col col-sm-3">
                        <FriendList />
                    </div>
                    <div className="col content col-sm-6">
                        <div className="newsfeed">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="message"><h5>What would you like to Yak about?</h5></label>
                                    <textarea id="message"
                                              value={this.state.message}
                                              onChange={this.handleFieldChange}
                                              className="form-control"
                                              rows="4"></textarea>
                                </div>
                                <button type="button" onClick={this.postMessage} className="btn btn-info btn-lg">Post</button>
                            </form>

                            <PostList posts={this.state.posts} activeUser={this.props.activeUser} />
                        </div>
                    </div>
                    <div className="col col-sm-3">
                        <AdList />
                        <GetEvents />
                    </div>
                </div>
            </div>



        )
    }
}
