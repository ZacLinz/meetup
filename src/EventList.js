import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {

  render() {
    return (
      <div className="d-flex justify-content-center">
      <ul className="EventList ">
        {this.props.events.map(event =>
          <li key={event.id}>
            <Event event={event}/>
          </li>
        )}
      </ul>
      </div>
    );
  }
}

export default EventList;
