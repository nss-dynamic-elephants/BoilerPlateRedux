 import React, { Component } from "react"
 import Events from "./events";

 export default class EventList extends Component {
     uniqueKey = 1
     render() {
         return (
             <div>
                 {
                     this.props.calendar.map(event => <Events key={this.uniqueKey++} event={event.event} date={event.date} location={event.location} start={event.start} end={event.end}/>)
                 }
             </div>
         )
     }
 }