import React, { Component } from 'react';
import EventList from './EventList';
import Event from './Event';
import CitySearch from './CitySearch';

class NumberOfEvents extends Component {
  state = {
    query: '32'
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
  }

  render() {
    const {query} = this.state;
    return (
      <div className="numberOfEvents">
        <input type="text"
          className="numberEvents"
          value={query}
          onChange={this.handleInputChanged}
        />
      </div>
    )
  }
}

export default NumberOfEvents;
