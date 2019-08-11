import React, { Component } from 'react';
import Modal from 'react-modal';



class Event extends Component {
  constructor(){
    super();

    this.state={
    };
  }

  state = {

  };

  showDetails = (value) => {

  }


  render() {
    return (
      <div>
        <ul className="event">
          <h1>{events.name}</h1>
          <p>{events.description}</p>
          <button onClick={() => this.showDetails()}>Show Details</button>
      </ul>
    );
  }
};

export default Event;
