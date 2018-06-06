import React, { Component } from "react"
import EventList from "./eventList";

export default class GetEvents extends Component {
    state = {
        calendar: []
    }

    componentDidMount () {
        fetch(`http://localhost:5001/calendar`)
           .then(r => r.json())
           .then(calendar => this.setState({calendar: calendar}))
    }

    render() {
        return (
            <div>
                <EventList calendar={this.state.calendar}/>
            </div>
        )
    }
}