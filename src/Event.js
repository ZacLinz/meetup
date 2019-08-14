import React, { Component } from 'react';

class Event extends Component {

  state = {
    show: false
  };

  showDetails = () => {
    const {show} = this.state;
    this.setState({
      show: !show
    })
  }


  render() {

    const {event} = this.props;
    const {show} = this.state;

    return (
      <div className="event">
        <div className="eventName">{event.name}</div>
          <button className="detailBtn" onClick={this.showDetails}>Show Details</button>
        {show && (
          <div className="details">
            <div className="eventCity">{event.venue.city}</div>
            <div className="eventCountry">{event.venue.localized_country_name}</div>
            <div className="eventGroup">{event.group.name}</div>
            <div className="eventLocation">{event.venue.address_1}</div>
            <div className="eventDescription">{event.description}</div>
      </div>
    )}
    </div>
  )
}
}

export default Event
