import React, { Component } from "react"

class Events extends Component {

    render() {
        return (
            <div className="calendarEvent">
                <h5>{this.props.event}</h5>
                <p>{this.props.date}</p>
                <p>{this.props.location}</p>
                <p>Start: {this.props.start} End: {this.props.end}</p>
                <p> {/*User name will go here*/}</p>
            </div>
        )
    }
}
export default Events

// "calendar": [
// {
//     "id": 1,
//     "userId": 3,
//     "event": "Some event",
//     "date": "mm/dd/yyyy",
//     "location": "somewhere",
//     "start": "00:00",
//     "end": "00:00"
//   }