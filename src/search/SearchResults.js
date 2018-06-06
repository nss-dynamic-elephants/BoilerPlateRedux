import React, { Component } from "react"
import "./SearchResults.css"
import Avatar from "../images/avatar.png"
import "../newsfeed/Post.css"


export default class SearchResults extends Component {
    // constructor(props) {
    //     super(props);
    //   }


    // Set initial state
    state = {
        posts: [],
        users: [],
        events: []
    }

    /*
        By putting the API search code in `componentDidMount()` you will note
        that when you perform a search, and are viewing the results, you can't
        search again without going back to the main view.

        How might you solve this issue?
    */
    RunSearch = function() {
        const newState = {}
        fetch(`http://localhost:5001/posts?message_like=${encodeURI(this.props.terms)}&_expand=user`)
            .then(r => r.json())
            .then(posts => {
                newState.posts = posts
                return fetch(`http://localhost:5001/users?q=${encodeURI(this.props.terms)}`)
            })
            .then(r => r.json())
            .then(users => {
                newState.users = users
                this.setState(newState)
            })
    }





    render() {
        console.log(this.props)
        return (
            <div className="searchResults">
            {this.RunSearch()}
                <h1>Search Results</h1>

                {
                    this.state.posts.map(p =>
                        <div className="card post" key={p.id}>
                            <div className="card-body">
                                <h5 className="card-title">By {p.user.email}</h5>
                                <p className="card-text">
                                    {p.message}
                                </p>
                                <a href="#" className="btn btn-outline-success">Like</a>
                            </div>
                        </div>
                    )
                }

                {
                    this.state.users.map(u =>
                        <div className="card post" key={u.id}>
                            <img className="card-img-top avatar" src={Avatar} alt="Generic person" />
                            <div className="card-body">
                                <h5 className="card-title">{u.email}</h5>
                                <a onClick={this.props.viewHandler} id="searchResults__profile" href="#" className="btn btn-outline-success userProfileButton">View profile</a>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

