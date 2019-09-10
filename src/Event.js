import React, { Component } from "react";
import { PieChart, Pie, Legend, Tooltip, Cell, ResponsiveContainer } from "recharts";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Event extends Component {
  state = {
    show: false
  };

  showDetails = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  getData() {
    let peopleGoing = this.props.event.yes_rsvp_count;
    let spotsAvailable =
      this.props.event.rsvp_limit - this.props.event.yes_rsvp_count;

    return [
      { name: "How many are going", value: peopleGoing },
      { name: "Available spots", value: spotsAvailable }
    ];
  }

  render() {
    const event = this.props.event;
    let colors = ["#FF5B33", "#33FF55"]

    return (
      <div className="d-flex justify-content-center">
        <Card className="Event">
          <Card.Title className="eventName">{event.name}</Card.Title>

          <Card.Text className="time">
            {event.local_time} on {event.local_date}
          </Card.Text>
          <Card.Text className="rsvp">
            {event.yes_rsvp_count} people are going
          </Card.Text>
          {this.state.show && (
            <div className="details">
              {event.rsvp_limit && (
                <ResponsiveContainer height={200}>
                  <PieChart margin={{top: 30, bottom: 15}}>
                    <Legend />
                    <Pie data={this.getData()} fill="#8884d8" label>
                    {
                      this.getData().map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]}/>
                      ))
                    }
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              )}

              {event.venue && (
                <Card.Text className="eventLocation">
                  {event.venue.city + ", " + event.venue.address_1}
                </Card.Text>
              )}
              <Card.Text
                className="description"
                dangerouslySetInnerHTML={{ __html: event.description }}
              />
              <Card.Text className="visibility">{event.visibility}</Card.Text>
              <a className="link" href={event.link}>
                Event link
              </a>
            </div>
          )}
          <Button className="detailBtn" onClick={this.showDetails}>
            Show/hide Details
          </Button>
        </Card>
      </div>
    );
  }
}

export default Event;
