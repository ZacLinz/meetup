import React, { Component } from 'react';

class Event extends Component {

  state = {
    show: false
  };

  showDetails = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }


  render() {

    const {event} = this.props;

    return (
      <div className="Event">
        <div className="eventName">{event.name}</div>
          <p className="time">{event.local_time} on {event.local_date}</p>

        {this.state.show && (
          <div className="details">
            <div className="eventGroup">{event.group.name}</div>
            <div className="eventLocation">{event.venue.address_1}</div>
            <div className="eventDescription">{event.description}</div>
      </div>
    )}
      <button className="detailBtn"
      onClick={this.showDetails}
      >Show/hide Details</button>
    </div>
  )
}
}

export default Event
