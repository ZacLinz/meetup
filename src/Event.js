import React, { Component } from 'react';
import Modal from 'react-modal';



class Event extends Component {
  constructor(){
    super();

    this.state={
      modalIsOpen: false
    };
  }

  state = {

  };

  showDetails = (event) => {

  }


  render() {
    return (
      <div>
        <button onClick={() => this.showDetails()}
      </div>
    );
  }
};

export default Event;
