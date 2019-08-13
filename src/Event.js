import React, { Component } from 'react';
import Modal from 'react-modal';



class Event extends Component {

  state = {
    events:  [],
    details: [],

  };

  showDetails = (value) => {

  }


  render() {
    return (
      <div>
      {this.state.events.map(event =>
        <ul className="event">
          <h1>{event.name}</h1>
          <p>{event.description}</p>
          <button onClick={() => this.showDetails()}>Show Details</button>
        </ul>
      )}
      </div>
    );
  }
};

export default Event;
