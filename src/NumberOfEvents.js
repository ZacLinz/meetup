import React, { Component } from 'react';
import { ErrorAlert } from './Alert'

class NumberOfEvents extends Component {
  state = {
    query: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
    this.props.updateEvents(null, null, value);

    if (value < 1){
      this.setState({ errorText: 'The number of events shown must be 1 or more',
      })
    }
    else{
      this.props.updateEvents(null, null, value);
      this.setState({ errorText: ''})
    }

  }

  render() {
    return (
      <div className="numberOfEvents">
        <input
          type="number"
          className="numberEvents"
          onChange={this.handleInputChanged}
          value={this.state.query}
        />
        <span> Events </span>
        <ErrorAlert text={this.state.errorText} />
      </div>
    )
  }
}

export default NumberOfEvents;
