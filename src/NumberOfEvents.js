import React, { Component } from 'react';
import EventList from './EventList';
import Event from './Event';
import CitySearch from './CitySearch';

class NumberOfEvents extends Component {
  state = {
    query: 32
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
  }

  render() {
    return (
      <div className="numberOfEvents">
        <input type="number"
          className="numberEvents"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
      </div>
    )
  }
}

export default NumberOfEvents;
