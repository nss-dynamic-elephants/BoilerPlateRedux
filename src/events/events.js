import React, { Component } from "react"

class Events extends Component {

    render() {
        return (
            <div className="calendarEvent">
                <h5>{this.props.calendar.event}</h5>
                <p>{this.props.calendar.date}</p>
                <p>{this.props.calendar.location}</p>
                <p>Start: {this.props.calendar.start} End: {this.props.calendar.end}</p>
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