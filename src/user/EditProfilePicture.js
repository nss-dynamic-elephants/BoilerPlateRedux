import React, { Component } from 'react'
import "./MyProfile.css"
import axios from 'axios';



class ProfilePicture extends Component {
    state = {selectedFile: null}

    fileChangedHandler = (event) => {
      this.setState({selectedFile: event.target.files[0]})
    }

    uploadHandler = () => {
        console.log("upload button hit")
        const formData = new FormData()
        formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
        axios.post('http://localhost:5001/profilePictures/file-upload', formData, {
            onUploadProgress: progressEvent => {
              console.log(progressEvent.loaded / progressEvent.total)
            }
          })
        }


    render() {
        return (
            <div>
                <input type="file" onChange={this.fileChangedHandler}></input>
                <button onClick={this.uploadHandler}>Upload!</button>
            </div>
        )
    }
}

export default ProfilePicture