 import React, { Component } from "react"
 import Events from "./Events";

 class EventList extends Component {
     state = {
         calendar: []
     }

     componentDidMount () {
         fetch(`http://localhost:5001/calendar`)
            .then(r => r.json())
            .then(ads => this.setState(
            {calendar: events}))
     }

     render() {
         return (
             <div>
                 {
                     this.state.calendar.map(event => <Event key={calendar.id} event={event}/>)
                 }
             </div>
         )
     }
 }