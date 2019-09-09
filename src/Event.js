import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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

    const event = this.props.event;

    return (
      <div className= "d-flex justify-content-center">
      <Card className="Event">
        <Card.Title className="eventName">{event.name}</Card.Title>

        <Card.Text className="time">{event.local_time} on {event.local_date}</Card.Text>
        <Card.Text className="rsvp">{event.yes_rsvp_count} people are going</Card.Text>
        {this.state.show &&
          <div className="details">
            {event.venue && (
              <Card.Text className="eventLocation">{event.venue.city + ', ' + event.venue.address_1}</Card.Text>
            )}
            <Card.Text className="description" dangerouslySetInnerHTML={{__html: event.description}} />
            <Card.Text className="visibility">{event.visibility}</Card.Text>
            <a className="link" href={event.link}>Event link</a>
          </div>
    }
      <Button className="detailBtn"
      onClick={this.showDetails}
      >Show/hide Details</Button>
    </Card>
    </div>
  )
}
}

export default Event
