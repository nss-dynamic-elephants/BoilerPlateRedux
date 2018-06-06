import React, { Component } from 'react'
import "./MyProfile.css"
import ProfilePicture from './EditProfilePicture';


// import SearchResults from './search/SearchResults'
// import NavBar from './nav/NavBar';
// import Home from './newsfeed/Home';
// import Login from './auth/Login';

class myProfile extends Component {

// Event listener on the "profile" button for another user

// Render the Profile for another user


    render() {
        return (
            <div>
                <h3 className="profileView">Profile View</h3>
                <ProfilePicture/>


            </div>
        )
    }
}

export default myProfile
